import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const TranslateContext = createContext();

function TranslateProvider({ children }) {
  const [ArLang, setArLang] = useState(false);
  const [letter, setLetter] = useState("");
  const { i18n } = useTranslation("global");

  function handleChangLan(lang) {
    setArLang(!ArLang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang.includes("ar")) {
      setArLang(true);
    } else {
      setArLang(false);
      if (!savedLang) {
        localStorage.setItem("lang", "en");
      }
    }
    i18n.changeLanguage(savedLang || "en");
  }, [i18n]); // أو ممكن تستخدم disable rule زي ما شرحت فوق

  return (
    <TranslateContext.Provider
      value={{ handleChangLan, setArLang, ArLang, letter, setLetter }}
    >
      {children}
    </TranslateContext.Provider>
  );
}

TranslateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TranslateContext, TranslateProvider };
