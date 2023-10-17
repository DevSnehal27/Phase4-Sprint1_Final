import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import axios from "axios";

let localFiles;
let language_resources;

// let language_resources = {
//   "de": {
//     translations: require('./locales/de/translations.json')
//   },
//   "en": {
//     translations: require('./locales/en/translations.json')
//   }     
// };

let getLanguageData = async (fileName) => {
  let response = await axios.get(`/threed/localizationLangData/${fileName}`);
  console.log("/threed/localizationLangData from config:::: ", response)
  return [fileName, response];
}

(async () => {
  await axios.get(`/Threed/getLocalizationFiles`).then((response) => {
    console.log(response.data, "getLocalizationFiles");
    if (response.data.length > -1) {

      localFiles = response.data.map((lang, i) => {
        return lang.name;
      })
      let languages;

      for (let i = 0; i < localFiles.length; i++) {

        getLanguageData(localFiles[i]).then((response) => {


          languages = { ...languages, [response[0]]: { translations: response[1].data } }

          if (Object.keys(languages).length == localFiles.length) {
            language_resources = languages
            i18n.use(initReactI18next).init({
              fallbackLng: "en",
              lng: "en",
              resources: language_resources,
              ns: ['translations'],
              defaultNS: 'translations'
            });

            i18n.languages = localFiles;
          }
        })
      }

      console.log("records inside config localFiles= ", localFiles);
    }
  });
})();

export default i18n;