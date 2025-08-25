import { dir } from "i18next";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";



const TranslateContext = createContext();


function TranslateProvider ({children}) {

    const[ArLang,setArLang]=useState(false);

    const[letter,setLetter]=useState('');
     
    const {i18n} =useTranslation("global");
     
    function handleChangLan (lang) {
         
        setArLang(!ArLang);


        i18n.changeLanguage (lang)

        localStorage.setItem("lang",lang);

    }   
    
    useEffect(() => {
      const savedLang = localStorage.getItem("lang");
      if(savedLang && savedLang.includes("ar")){
        setArLang(true);
      } else{
        setArLang(false);
        // Set default language if none is stored
        if(!savedLang) {
          localStorage.setItem("lang", "en");
        }
      } 
      i18n.changeLanguage(savedLang || "en")
    }, [])
    


    
    return <TranslateContext.Provider value={{handleChangLan , setArLang , ArLang , letter , setLetter}}  >{children}</TranslateContext.Provider>
}




export {TranslateContext,TranslateProvider};