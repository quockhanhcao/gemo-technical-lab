const BreakfastModal = (props) => {
  if (!props.show) {
    return null;
  }

  const toppingList = props.toppingList;

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Your options</h4>
        </div>

        <div className="modal-body">
          <form action="">
            <h3>Additional topping</h3>
            <div>
              <div>
                <label htmlFor={toppingList[0].value}>{toppingList[0].name}</label>
                <span>+{toppingList[0].price} USD</span>
              </div>
              <input
                type="checkbox"
                id={toppingList[0].value}
                name={toppingList[0].value}
                value={toppingList[0].value}
              />
            </div>

            <div>
              <div>
                <label htmlFor={toppingList[1].value}>{toppingList[1].name}</label>
                <span>+{toppingList[1].price} USD</span>
              </div>
              <input
                type="checkbox"
                id={toppingList[1].value}
                name={toppingList[1].value}
                value={toppingList[1].value}
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

export default BreakfastModal;
