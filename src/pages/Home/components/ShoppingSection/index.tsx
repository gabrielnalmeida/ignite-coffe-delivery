import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { PriceTag, Badge, ShoppingContainer, ShoppingItem, ShoppingItems, CustomInputNumber, CustomInputNumberButton, ShopButton } from "./styles";

export function ShoppingSection() {
  return (
      <ShoppingContainer>
        <h2>Nossos cafés</h2>

        <ShoppingItems>


          <ShoppingItem>
            <img src="" alt="" />
            <Badge>
              Tradicional
            </Badge>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <PriceTag>
              <h3>R$ <strong>9,00</strong></h3>
              <CustomInputNumber>
                <CustomInputNumberButton variant="minus">
                  <Minus size={14} />
                </CustomInputNumberButton>
                <span>1</span>
                <CustomInputNumberButton variant="plus">
                  <Plus size={14} />
                </CustomInputNumberButton>
              </CustomInputNumber>
              <ShopButton type="button">
                <ShoppingCart weight="fill" size={22} />
              </ShopButton>
            </PriceTag>
          </ShoppingItem>
        </ShoppingItems>
      </ShoppingContainer>
  )
}