import { useSelector } from "react-redux";
import "./CartItems.css";
import { useDispatch } from "react-redux";
import { removeItem } from "../../slice/restaurantSlice";
const CartItems = () => {
  const items = useSelector(store => store.restaurant.items);
  const dispatch = useDispatch();

  const handleRemoveItems = (id)=>{
     dispatch(removeItem(id))
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Checkout</h2>

      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        items.map(item => (
          <div className="cart-item" key={item.id}>
            <span className="item-name">{item.name}</span>
            <span className="item-price">₹{item.price}</span>
            <button onClick={() => handleRemoveItems(item.id)} className="btn-remove">remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItems;
