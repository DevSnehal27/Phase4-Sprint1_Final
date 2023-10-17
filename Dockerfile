# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:5.0.103 AS build
WORKDIR /build

RUN curl -sL https://deb.nodesource.com/setup_12.x |  bash -
RUN apt-get install -y nodejs

# copy csproj and restore as distinct layers
COPY ./*.csproj .
RUN dotnet restore

# copy everything else and build app
COPY . .
WORKDIR /build
RUN dotnet tool install --global dotnet-ef --version 5.0.2
ENV PATH="${PATH}:/root/.dotnet/tools"
RUN dotnet ef database update --context ThreedContext
RUN dotnet dev-certs https --clean
RUN dotnet dev-certs https
RUN dotnet dev-certs https --trust
RUN dotnet publish -c release -o published --no-cache

FROM node:12 AS node-builder
WORKDIR /node
COPY ./ClientApp /node
RUN npm install
RUN npm run-script build

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
ENV ASPNETCORE_URLS="https://*:443;http://*:80"
WORKDIR /app
RUN mkdir /app/pdf
COPY ./pdf /app/pdf
RUN mkdir /app/wwwroot
COPY --from=build /build/published .
COPY --from=build /build/threed.db .
COPY --from=build /root/.dotnet/corefx/cryptography/x509stores/my/* /root/.dotnet/corefx/cryptography/x509stores/my/
COPY --from=node-builder /node/build ./wwwroot
ENTRYPOINT ["dotnet", "reactnet3.dll"]