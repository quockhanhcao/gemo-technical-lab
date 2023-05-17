import sandwich from "./sandwich.jpg";
import bagel from "./bagels.jpg";
import star from "./star.png";
import { useTranslation } from "react-i18next";

const Foods = () => {
  const { t } = useTranslation();

  return (
    <div className="foods">
      <h3>{t("Breakfast")}</h3>
      <div className="grid-container-food">
        <div>
          <a href="/">
            <img src={sandwich} alt="sandwich" />
            <div className="food-info">
              <h3>{t("Sandwich")}</h3>
              <div>
                <div>
                  <p>
                    {" "}
                    4.8{" "}
                    <span>
                      <img src={star} alt="" />
                    </span>
                  </p>
                </div>
                <div>
                  <span className="promo">40%</span>
                  <p className="original-price">5.00 USD</p>
                </div>
              </div>
              <div>
                <p>{t("BasePrice")}</p>
                <p>3.00 USD</p>
              </div>
            </div>
            <button className="add-to-cart">{t("AddToCart")}</button>
          </a>
        </div>

        <div>
          <a href="/">
            <img src={bagel} alt="bagel" />
            <div className="food-info">
              <h3>{t("Bagel")}</h3>
              <div>
                <div>
                  <p>
                    {" "}
                    4.8{" "}
                    <span>
                      <img src={star} alt="" />
                    </span>
                  </p>
                </div>
                <div>
                  <span className="promo">40%</span>
                  <p className="original-price">5.00 USD</p>
                </div>
              </div>
              <div>
                <p>{t("BasePrice")}</p>
                <p>3.00 USD</p>
              </div>
            </div>
            <button className="add-to-cart">{t("AddToCart")}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Foods;
