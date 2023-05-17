import shopName from "./shop-name-footer.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <div className="footer">
      <div className="grid-container-footer">
        <div id="footer-intro">
          <h2>
            <img src={shopName} alt="logo" />
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, tenetur
            reprehenderit! Pariatur, laudantium quia? Temporibus itaque nesciunt
            eum accusamus commodi, sunt culpa sit officiis necessitatibus?
            Incidunt autem quos at, molestiae blanditiis dignissimos, minus
            officiis excepturi consequatur unde reiciendis et atque tempora?
            Error illo illum amet qui repudiandae corrupti ipsum voluptatum?
          </p>
        </div>
        <div className="footer-links">
            <h2>{t("QuickLinks")}</h2>

            <br></br>
            <ul>
                <li>{t("Drinks")}</li>
                <li>{t("Breakfast")}</li>
                <li>{t("FruitJuice")}</li>
            </ul>
        </div>
        <div className="footer-links">
            <h2>{t("About")}</h2>
            <br></br>
            <ul>
                <li>{t("About")}</li>
                <li>{t("Contact")}</li>
            </ul>
        </div>
        <div className="footer-links">
            <h2>{t("SocialMedia")}</h2>
            <br></br>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
