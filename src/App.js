import React,{Suspense,useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation ,Trans} from 'react-i18next'

import i18next from 'i18next';
import imageEng from './img/eng.jpg'
import imageRu from './img/ru.jpg'
import imageUa from './img/ua.jpg'
import Header from './Header';

//Компонент Trans - лучший способ перевести дерево JSX за один перевод. 
//Это позволя например. легко переводить текст, содержащий компонент ссылки или форматирование, подобное .<strong>



function App() {
  const { t, i18n } = useTranslation();
 
  const lang = localStorage.getItem('lang') || 'en'

 const change = (option)=> {
 
    localStorage.setItem('lang', option.target.value);
    window.location.reload()
      
     
  }

  useEffect(() => {
    i18next.changeLanguage(lang)
  }, [])
  return (

      <div className='App'>
         <header>
          
          
      <h1>{t('Thanks.1')}</h1>
      <h2>{t('Why.1')}</h2>
    </header>
    <img src={localStorage.getItem('i18nextLng')==='en'
      ?imageEng : localStorage.getItem('i18nextLng')==='ru'
      ?imageRu : imageUa}alt='img'/>
  
   

       <select onChange={change} value={lang}>
                <option value='en'>English</option>
                <option value='ua'>Ukrainian</option>
                <option value='ru'>Russian</option>
            </select>
    </div>

  );
}

export default App;
