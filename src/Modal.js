import coffee from './coffee-2.png'
const Modal = (props) => {
    if (!props.show) {
        return null;
    }

    return ( 
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Your options</h4>
                </div>

                <div className="modal-body">
                    <img src={coffee} alt="" />


                    <form action="">
                        <p>Size</p>
                        <input type="radio" id='EXTRA_LARGE' name='size' value='EXTRA_LARGE'/>
                        <label htmlFor="EXTRA_LARGE">XL</label>

                        <input type="radio" id='LARGE' name='size' value='LARGE'/>
                        <label htmlFor="LARGE">L</label>

                        <input type="radio" id='MEDIUM' name='size' value='MEDIUM'/>
                        <label htmlFor="MEDIUM">M</label>

                        <input type="radio" id='SMALL' name='size' value='SMALL'/>
                        <label htmlFor="SMALL">S</label>

                        <p>Additional topping</p>
                        <input type="checkbox" id='WHIPPED_CREAM' name='cream' value='WHIPPED_CREAM'/>
                        <label htmlFor="WHIPPED_CREAM">Whipped cream</label>

                        <input type="checkbox" id='CHOCOLATE_SAUCE' name='CHOCOLATE_SAUCE' value='CHOCOLATE_SAUCE'/>
                        <label htmlFor="CHOCOLATE_SAUCE">Chocolate sauce</label>
                    </form>
                </div>

                <div className="modal-footer">
                <button onClick={props.onClose} className="close-modal-button">Order now</button>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;