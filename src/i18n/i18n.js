import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
 
// для передачи lng и переводов при инициализации
const Languages = ['en', 'ru', 'ua']

i18n
   // загружаем перевод, используя http -> see / public / locales (т.е. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales) 
   // узнать больше: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // определяем язык пользователя 
  // узнать больше: https://github.com/i18next/i18next-browser-languageDetector 
  .use(LanguageDetector)
  // передаем экземпляр i18n в response-i18next.
  .use(initReactI18next)
  // инициализируем i18next 
  // для всех опций читайте: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    whitelist: Languages
    
  });


export default i18n;