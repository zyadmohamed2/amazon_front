import "./Footer.scss";
import { useRecoilState } from "recoil";
import { $countries } from "../../recoilstore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBuildingColumns, faMailBulk, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("global");
  const userLang = localStorage.getItem("lang");
  const [countries] = useRecoilState($countries);
  
  return (
    <div className="col-12 foter1" dir={userLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="footer">
        <div className="footerdiv">
          <ul>
            <h5 id="fh4">{t("text.COUNTRY-LOCATION / LOCAL OFFICE")}</h5>
            <li>
              <label htmlFor="fselect">{t("text.Choose Country")}</label>
              <select id="fselect">
                {countries.map((country) => (
                  <option key={country.unicode} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <a id="flink" href="tel:+2022540974" aria-label="Phone number">
                <FontAwesomeIcon icon={faPhone} />
                <span style={{marginLeft: "10px"}}>+2022540974</span>
              </a>
            </li>
            <li>
              <a id="flink" href="mailto:eg177-AA.egypt@AA.com" aria-label="Email address"> 
                <FontAwesomeIcon icon={faMailBulk} />
                <span style={{marginLeft: "10px"}}>eg177-AA.egypt@AA.com</span>
              </a>
            </li>
            <li>
              <a id="flink" href="/" aria-label="Office details">
                <FontAwesomeIcon icon={faBuildingColumns} />
                <span style={{marginLeft: "10px"}}>{t("text.Office Details")}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerdiv">
          <ul>
            <h5 id="fh4">{t("text.Doing business togethe")}</h5>
            <li>
              <a id="flink" href="/" aria-label="Solutions">
                {t("text.Solutions /")}
              </a>
              <a id="flink" href="/" aria-label="Local information"> 
                {t('text. Local information/')}
              </a>
              <a id="flink" href="/" aria-label="E-Business">
                {t("text. E-Buisness")}
              </a>
            </li>
            <li>
              <a id="flink" href="/" aria-label="Sustainability">
                {t("text.Sustainability /")}
              </a>
              <a id="flink" href="/" aria-label="MY MA">
                MY MA
              </a>
            </li>
          </ul>
        </div>
        <div className="footerdiv">
          <ul>
            <h5 id="fh4">{t("text.Get to know us")}</h5>
            <li>
              <a id="flink" href="/" aria-label="AM Group">
                {t("text.  AM Group /")}
              </a>
              <a id="flink" href="/" aria-label="News Room">
                {t("text.News Room /")}
              </a>
            </li>
            <li>
              <a id="flink" href="/" aria-label="Events">
                {t("text.Events /")}
              </a>
              <a id="flink" href="/" aria-label="Blog">
                {t("text.Blog /")}
              </a>
            </li>
            <li>
              <a id="flink" href="/" aria-label="Careers">
                {t("text.Careers/")}
              </a>
              <a id="flink" href="/" aria-label="Contact Us">
                {t("text.ContactUs/")}
              </a>
            </li>
            <li>
              <a id="flink" href="/" aria-label="Preference Center">
                {t("text. Preference Center")}
              </a>
            </li>
            <li className="social-icons">
              <a id="flink" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div id="fiacon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </a>
              <a id="flink" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div id="fiacon">
                  <FontAwesomeIcon icon={faX} />
                </div>
              </a>
              <a id="flink" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div id="fiacon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
              <a id="flink" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div id="fiacon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </a>
              <a id="flink" href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <div id="fiacon">
                  <FontAwesomeIcon icon={faYoutube}/>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Amazon Marin. {t("text.All Rights Reserved")}.</p>
      </div>
    </div>
  );
}
