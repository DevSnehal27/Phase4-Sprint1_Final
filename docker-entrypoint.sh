#!/usr/bin/env bash

usage()
{
    echo "Please enter the following arguments: \
    --cert_filepath: pfx certificate file path. \
    --cert_password: pfx certificate password."
}

cert_filepath=""
cert_password=""

while [[ "$1" != "" ]]; do
    case $1 in
        --cert_filepath )       shift
                                cert_filepath=$1
                                ;;
        --cert_password )       shift
                                cert_password=$2
                                ;;
        -h | --help )           usage
                                exit
                                ;;
        * )                     usage
                                exit 1
    esac
    shift
done
sudo chmod 777 ${cert_filepath}
# Install certificate and run application
./certificate-tool add -f ${cert_filepath} -p ${cert_password}
# dotnet ./ConsoleApp.dll
dotnet published/reactnet3.dll