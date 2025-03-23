import { useContext } from "react";
import { ProductContext } from "../../../../contexts/ShoppingContext";
import { ItemCounterBadge, ItemCounterContainer } from "./styles";

export function ItemCounter() {
  const { shoppingCart } = useContext(ProductContext);

  const totalItems = shoppingCart.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <ItemCounterContainer>
      <ItemCounterBadge>{totalItems}</ItemCounterBadge>
    </ItemCounterContainer>
  )
}