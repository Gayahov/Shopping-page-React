import ShoppingButton from "../../../shared/ShoppingButton/ShoppingButton";
import "./CartButton.css"

function CartButton() {
  return (
    <div className="cart-information">
      <div className="cart-info"><p>Your bag is empty</p></div>
      <div className="cart-buttonbox">
        <ShoppingButton buttonName="Checkout"></ShoppingButton>
      </div>
    </div>
  );
}
export default CartButton;
