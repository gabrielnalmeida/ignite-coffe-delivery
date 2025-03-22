import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Product as ProductType } from "../../../../../../reducers/products/reducer";
import { formatPrice } from "../../../../../../utils/formatPrice";
import { Badge, BadgeContainer, CustomInputNumber, CustomInputNumberButton, PriceTag, Product, ShopButton } from "./styles";
import { useContext } from "react";
import { ProductContext } from "../../../../../../contexts/ProductContext";

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(ProductContext);

  const handleAddToCart = () => {
    addToCart(product);
  }
    
  return (
    <Product>
      <img src={product.image} alt="" />
      <BadgeContainer>
        {product.badge.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </BadgeContainer>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <PriceTag>
        <h3>R$ <strong>{formatPrice(product.price)}</strong></h3>
        <CustomInputNumber>
          <CustomInputNumberButton variant="minus">
            <Minus size={14} />
          </CustomInputNumberButton>
          <span>1</span>
          <CustomInputNumberButton variant="plus">
            <Plus size={14} />
          </CustomInputNumberButton>
        </CustomInputNumber>
        <ShopButton type="button" onClick={handleAddToCart}>
          <ShoppingCart weight="fill" size={22} />
        </ShopButton>
      </PriceTag>
    </Product>
  )
}