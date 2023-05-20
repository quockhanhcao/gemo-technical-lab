const CoffeeModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Your options</h4>
        </div>

        <div className="modal-body">
          <form action="">
            <h3>Type</h3>
            <div>
              <div>
                <label htmlFor="HOT">Hot</label>
              </div>
              <input type="radio" id="HOT" name="type" value="HOT" />
            </div>
            <div>
              <div>
                <label htmlFor="COLD">Cold</label>
              </div>
              <input type="radio" id="COLD" name="type" value="COLD" />
            </div>
            <div>
              <div>
                <label htmlFor="BLENDED">Blended</label>
                <span>+0.5 USD</span>
              </div>
              <input type="radio" id="BLENDED" name="type" value="BLENDED" />
            </div>

            <h3>Size</h3>
            <div>
              <div>
                <label htmlFor="EXTRA_LARGE">XL</label>
              </div>
              <input
                type="radio"
                id="EXTRA_LARGE"
                name="size"
                value="EXTRA_LARGE"
              />
            </div>

            <div>
              <div>
                <label htmlFor="LARGE">L</label>
              </div>
              <input type="radio" id="LARGE" name="size" value="LARGE" />
            </div>

            <div>
              <div>
                <label htmlFor="MEDIUM">M</label>
              </div>
              <input type="radio" id="MEDIUM" name="size" value="MEDIUM" />
            </div>

            <div>
              <div>
                <label htmlFor="SMALL">S</label>
              </div>
              <input type="radio" id="SMALL" name="size" value="SMALL" />
            </div>

            <h3>Additional topping</h3>
            <div>
              <div>
                <label htmlFor="WHIPPED_CREAM">Whipped cream</label>
              </div>
              <input
                type="checkbox"
                id="WHIPPED_CREAM"
                name="cream"
                value="WHIPPED_CREAM"
              />
            </div>

            <div>
              <div>
                <label htmlFor="CHOCOLATE_SAUCE">Chocolate sauce</label>
              </div>
              <input
                type="checkbox"
                id="CHOCOLATE_SAUCE"
                name="CHOCOLATE_SAUCE"
                value="CHOCOLATE_SAUCE"
              />
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button onClick={props.onClose} className="close-modal-button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeModal;
