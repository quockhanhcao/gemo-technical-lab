import coffee from "./coffee.jpg";
import milkTea from "./milk-tea.jpg";
import star from "./star.png";

const Drinks = () => {
  return (
    <div className="drinks">
      <h3>Drinks</h3>
      <div className="grid-container">
        <div>
          <a href="/">
            <img src={coffee} alt="coffee" />
            <div className="food-info">
              <h3>Coffee</h3>
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
                <p>Base price</p>
                <p>2.00 USD</p>
              </div>
            </div>
            <div className="add-to-cart">Add to cart</div>
          </a>
        </div>

        <div>
          <a href="/">
            <img src={milkTea} alt="milk-tea" />
            <div className="food-info">
              <h3>Milk tea</h3>
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
                <p>Base price</p>
                <p>2.25 USD</p>
              </div>
            </div>
          </a>
          <div className="add-to-cart">Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
