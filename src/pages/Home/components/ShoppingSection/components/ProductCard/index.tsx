import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Product as ProductType } from "../../../../../../@types/product";
import { formatPrice } from "../../../../../../utils/formatPrice";
import { Badge, BadgeContainer, CustomInputNumber, CustomInputNumberButton, PriceTag, Product, ShopButton } from "./styles";
import { useContext, useState } from "react";
import { ProductContext } from "../../../../../../contexts/ShoppingContext";

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(ProductContext);

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (variant: 'plus' | 'minus') => {
    if (variant === 'plus') {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
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
          <CustomInputNumberButton variant="minus" onClick={() => handleQuantity('minus')}>
            <Minus size={14} />
          </CustomInputNumberButton>
          <span>{quantity}</span>
          <CustomInputNumberButton variant="plus" onClick={() => handleQuantity('plus')}>
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