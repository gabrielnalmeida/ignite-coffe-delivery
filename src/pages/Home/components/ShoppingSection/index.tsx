import { ShoppingContainer, ShoppingItems, ShoppingContainerTitle } from "./styles";
import Products from '../../../../data/products.json';
import { ProductCard } from "./components/ProductCard";


export function ShoppingSection() {
  return (
      <ShoppingContainer>
        <ShoppingContainerTitle>Nossos cafés</ShoppingContainerTitle>
        <ShoppingItems>
          {Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ShoppingItems>
      </ShoppingContainer>
  )
}