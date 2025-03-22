import { useContext } from "react";
import { ProductContext } from "../../../../contexts/ProductContext";
import { ItemCounterBadge, ItemCounterContainer } from "./styles";

export function ItemCounter() {
  const { shoppingCart } = useContext(ProductContext);

  return (
    <ItemCounterContainer>
      <ItemCounterBadge>{shoppingCart.length}</ItemCounterBadge>
    </ItemCounterContainer>
  )
}