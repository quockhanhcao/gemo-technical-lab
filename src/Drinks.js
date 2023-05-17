import coffee from "./coffee.jpg";
import milkTea from "./milk-tea.jpg";
import star from "./star.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "./Modal";

const Drinks = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  return (
    <div className="drinks">
      <h3>{t("Drinks")}</h3>
      <div className="grid-container-food">
        <div>
            <img src={coffee} alt="coffee" />
            <div className="food-info">
              <h3>{t("Coffee")}</h3>
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
                  <span className="promo">60%</span>
                  <p className="original-price">5.00 USD</p>
                </div>
              </div>
              <div>
                <p>{t("BasePrice")}</p>
                <p>2.00 USD</p>
              </div>
            </div>
            <button className="add-to-cart" onClick={() => setShow(true)}>
              {t("AddToCart")}
            </button>
        </div>

        <div>
            <img src={milkTea} alt="milk-tea" />
            <div className="food-info">
              <h3>{t("MilkTea")}</h3>
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
                  <span className="promo">60%</span>
                  <p className="original-price">5.00 USD</p>
                </div>
              </div>
              <div>
                <p>{t("BasePrice")}</p>
                <p>2.25 USD</p>
              </div>
            </div>
                      <button className="add-to-cart" onClick={() => setShow(true)}>
              {t("AddToCart")}
            </button>
        </div>
      </div>
      <Modal onClose={() => setShow(false)} show={show}/>
    </div>
  );
};

export default Drinks;
