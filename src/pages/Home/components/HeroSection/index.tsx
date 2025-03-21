import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import HeroImage from "../../../../assets/hero-image.svg";
import { HeroContainer, HeroContent, HeroContentChildren, HeroText } from "./styles";

export function HeroSection() {
  return (
    <HeroContainer>
      <HeroText>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <HeroContent>
          <HeroContentChildren variant="yellow-dark">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </HeroContentChildren>
          <HeroContentChildren variant="gray">
            <span>
              <Package size={16} />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </HeroContentChildren>
          <HeroContentChildren variant="yellow">
            <span>
              <Timer size={16} />
            </span>
            <p>Entrega rápida e rastreada</p>
          </HeroContentChildren>
          <HeroContentChildren variant="purple">
            <span>
              <Coffee size={16} />
            </span>
            <p>O café chega fresquinho até você</p>
          </HeroContentChildren>
        </HeroContent>
      </HeroText>
      <img src={HeroImage} alt="Copo de café com grãos ao redor" />
    </HeroContainer>
  )
}