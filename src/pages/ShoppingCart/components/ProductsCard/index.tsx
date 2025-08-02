import { useContext } from "react";
import { Product as ProductType} from "../../../../@types/product";
import { Image, Product, ProductHeader, ProductActions, ProductTitle, ProductPrice, ProductDetails, CustomInputNumber, CustomInputNumberButton, RemoveItemButton } from "./styles";
import { ProductContext } from "../../../../contexts/ShoppingContext";
import { Minus, Plus, Trash } from "phosphor-react";

interface ProductCardProps {
  readonly product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  const normalizePrice = (price: number) => {
    return price.toFixed(2).replace('.', ',');
  };

  const { increaseQuantity, reduceQuantity, removeFromCart } = useContext(ProductContext);

  return (
    <Product>
      <Image src={product.image} alt={product.name} />
      <ProductDetails>
        <ProductHeader>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>R$ {normalizePrice(product.price * product.quantity)}</ProductPrice>
        </ProductHeader>
        <ProductActions>
          <CustomInputNumber>
            <CustomInputNumberButton variant="minus" onClick={() => {
              if (product.quantity > 1) {
                reduceQuantity(product);
              } else {
                removeFromCart(product);
              }
            }}>
              <Minus size={14} />
            </CustomInputNumberButton>
            <span>{product.quantity}</span>
            <CustomInputNumberButton variant="plus" onClick={() => increaseQuantity(product)}>
              <Plus size={14} />
            </CustomInputNumberButton>
          </CustomInputNumber>
          <RemoveItemButton onClick={() => removeFromCart(product)} >
            <Trash size={18} />
            Remover
          </RemoveItemButton>
        </ProductActions>
      </ProductDetails>
    </Product>
  );
}