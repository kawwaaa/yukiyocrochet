import cart from './assets/cart-icon.png';
import './Cart.css'
const Cart = () => {
    return ( 
        <div className="cart">
            <button>
                <img src={cart} alt="Cart" />
            </button>
        </div>
     );
}
 
export default Cart;