import CartItem from "../cartItem/CartItem";
import { CartItemType } from "../../App";
import { Wrapper } from "./Cart.styles";

type Props = {
  cart: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const Cart: React.FC<Props> = ({ cart, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cart.length === 0 ? <p>You have no items in your cart</p> : null}
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cart).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
