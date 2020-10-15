import React,{Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation ,Trans} from 'react-i18next';
import i18next from 'i18next';
import imageEng from './img/eng.jpg'
import imageRu from './img/ru.jpg'
import imageUa from './img/ua.jpg'
//Компонент Trans - лучший способ перевести дерево JSX за один перевод. 
//Это позволя например. легко переводить текст, содержащий компонент ссылки или форматирование, подобное .<strong>



function App() {
  const { t, i18n } = useTranslation();
  function handleClick(lang){
    i18next.changeLanguage(lang)
  }

  return (

      <div className='App'>
         <header>
      
      <h1>{t('Thanks.1')}</h1>
      <h2>{t('Why.1')}</h2>
    </header>
    <img src={localStorage.getItem('i18nextLng')==='en'
      ?imageEng : localStorage.getItem('i18nextLng')==='ru'
      ?imageRu : imageUa}alt='img'/>
    <nav>
      <button onClick={()=>handleClick('en')}>
       English
      </button>
      <button onClick={()=>handleClick('ru')}>
       Russian
      </button>
      <button onClick={()=>handleClick('ua')}>
       Urainian
      </button>
    </nav>
   
    </div>

  );
}

export default App;
