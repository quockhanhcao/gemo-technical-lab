import coffee from "../assets/coffee/coffee.jpg";
import milkTea from "../assets/milk-tea/milk-tea.jpg";
import star from "../assets/utility/star.png";
import sandwich from "../assets/food/sandwich.jpg";
import bagel from "../assets/food/bagels.jpg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CoffeeModal from "../Modal/CoffeeModal";
import BreakfastModal from "../Modal/BreakfastModal";
import MilkTeaModal from "../Modal/MilkTeaModal";

const Drinks = () => {
  const { t } = useTranslation();
  const [showCoffeeModal, setShowCoffeeModal] = useState(false);
  const [showMilkTeaModal, setShowMilkTeaModal] = useState(false);
  const [showBreakfastModal, setShowBreakfastModal] = useState(false);
  const sandwichToppings = [
    { name: "Egg", value: "EGG", price: 1 },
    { name: "Turkey", value: "TURKEY", price: 1 },
  ];

  const bagelToppings = [
    { name: "Butter", value: "BUTTER", price: 0.5 },
    { name: "Cream cheese", value: "CREAM_CHEESE", price: 0.5 },
  ];
  const [breakfastOptions, setBreakfastOptions] = useState(sandwichToppings);

  return (
    <div>
      <div className="foods">
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
            <button
              className="add-to-cart"
              onClick={() => setShowCoffeeModal(true)}
            >
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
            <button
              className="add-to-cart"
              onClick={() => setShowMilkTeaModal(true)}
            >
              {t("AddToCart")}
            </button>
          </div>
        </div>
        <div className="foods">
          <h3>{t("Breakfast")}</h3>
          <div className="grid-container-food">
            <div>
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
              <button
                className="add-to-cart"
                onClick={() => {
                  setBreakfastOptions(sandwichToppings);
                  setShowBreakfastModal(true);
                }}
              >
                {t("AddToCart")}
              </button>
            </div>

            <div>
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
              <button
                className="add-to-cart"
                onClick={() => {
                  setBreakfastOptions(bagelToppings);
                  setShowBreakfastModal(true);
                }}
              >
                {t("AddToCart")}
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
      <CoffeeModal
        onClose={() => setShowCoffeeModal(false)}
        show={showCoffeeModal}
      />
      <MilkTeaModal
        onClose={() => setShowMilkTeaModal(false)}
        show={showMilkTeaModal}
      />
      <BreakfastModal
        onClose={() => setShowBreakfastModal(false)}
        show={showBreakfastModal}
        toppingList={breakfastOptions}
      />
    </div>
  );
};

export default Drinks;
