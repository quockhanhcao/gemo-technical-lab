import sandwich from "./sandwich.jpg";
import bagel from "./bagels.jpg";
import star from "./star.png";
const Foods = () => {
  return (
    <div className="drinks">
      <h3>Breakfast</h3>
      <div className="grid-container">
        <div>
          <a href="/">
            <img src={sandwich} alt="sandwich" />
            <div className="food-info">
              <h3>Sandwich</h3>
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
                <p>Base price</p>
                <p>3.00 USD</p>
              </div>
            </div>
            <div className="add-to-cart">Add to cart</div>
          </a>
        </div>

        <div>
          <a href="/">
            <img src={bagel} alt="bagel" />
            <div className="food-info">
              <h3>Bagel</h3>
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
                <p>Base price</p>
                <p>3.00 USD</p>
              </div>
            </div>
            <div className="add-to-cart">Add to cart</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Foods;
