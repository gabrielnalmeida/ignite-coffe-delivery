import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, AddressSection,  ProductSection, SectionTitle, ShoppingContainer,  FormRow, FormHeader, FormSubtitle, FormTitle,  FormInput, Separator, ShoppingItems, FormSection, CartFooter, CartDetails, CartFullPrice, ConfirmBuyButton } from "./styles";
import * as zod from "zod";
import { Address } from "../../@types/address";
import { useContext } from "react";
import { CustomerContext } from "../../contexts/CustomerContext";
import { MapPinLine } from "phosphor-react";
import { ProductContext } from "../../contexts/ShoppingContext";
import { ProductCard } from "./components/ProductsCard";

const customerAddressFormSchema = zod.object({
  postalCode: zod.string().length(8),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().optional(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
});

type NewCustomerAddressFormData = zod.infer<typeof customerAddressFormSchema>;

export function ShoppingCart() {

  const { setCustomerAddress, customerAddress } = useContext(CustomerContext);
  const { shoppingCart } = useContext(ProductContext);


  const newAddressForm = useForm<NewCustomerAddressFormData>({
    resolver: zodResolver(customerAddressFormSchema),
    defaultValues: {
      postalCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  const { handleSubmit } = newAddressForm;

  const handleSetCustomerAddress = (data: NewCustomerAddressFormData) => {
    setCustomerAddress(data as Address);
  }

  const total = shoppingCart.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);

  const normalizePrice = (price: number) => {
    return price.toFixed(2).replace('.', ',');
  };

  return (
      <ShoppingContainer>
        <FormSection>
          <SectionTitle>Complete seu pedido</SectionTitle>

          <AddressSection>
              <Form onSubmit={handleSubmit(handleSetCustomerAddress)}>
                <FormHeader>
                  <MapPinLine size={22} color="#C47F17" /> 
                  <div>
                    <FormTitle>
                      Endereço de Entrega
                    </FormTitle>
                    <FormSubtitle>
                      Informe o endereço onde deseja receber seu pedido
                    </FormSubtitle>
                  </div>
                </FormHeader>
                <FormProvider {...newAddressForm}>
                    <FormRow>
                      <FormInput 
                        id="postalCode" 
                        value={customerAddress.postalCode} 
                        gridColumns={4} 
                        type="text"
                        placeholder="CEP"
                      />
                    </FormRow>
                    <FormRow>
                      <FormInput 
                        id="street" 
                        value={customerAddress.street} 
                        type="text" 
                        placeholder="Rua" 
                      />
                    </FormRow>
                    <FormRow>
                      <FormInput 
                        id="number" 
                        value={customerAddress.number} 
                        gridColumns={4} 
                        type="text" 
                        placeholder="Número" 
                        size={10} 
                      />
                      <FormInput 
                        id="complement" 
                        value={customerAddress.complement} 
                        gridColumns={8} 
                        type="text" 
                        placeholder="Complemento" 
                      />
                    </FormRow>
                    <FormRow>
                      <FormInput 
                        id="neighborhood" 
                        value={customerAddress.neighborhood} 
                        gridColumns={4} 
                        type="text" 
                        placeholder="Bairro" 
                      />
                      <FormInput 
                        id="city" 
                        value={customerAddress.city} 
                        gridColumns={6} 
                        type="text" 
                        placeholder="Cidade" 
                      />
                      <FormInput 
                        id="state" 
                        value={customerAddress.state} 
                        gridColumns={2} 
                        type="text" 
                        placeholder="UF" 
                      />
                    </FormRow>
                </FormProvider>
              </Form>
          </AddressSection>
        </FormSection>
        <div>
          <SectionTitle>Cafés selecionados</SectionTitle>
          <ProductSection>
            <ShoppingItems>
              {shoppingCart.map((product) => (
                <>
                  <ProductCard key={product.id} product={product} />
                  <Separator />
                </>
              ))}
            </ShoppingItems>

            <CartFooter>
              <CartDetails>
                <p>Total</p>
                <span>R$ {normalizePrice(total)}</span>
              </CartDetails>
              <CartDetails>
                  <p>Entrega</p>
                  <span>R$ {normalizePrice(3.5)}</span>
              </CartDetails>
              <CartFullPrice>
                <p>Preço total</p>
                <span>R$ {normalizePrice(total + 3.5)}</span>
              </CartFullPrice>
            </CartFooter>

            <ConfirmBuyButton>
              CONFIRMAR PEDIDO
            </ConfirmBuyButton>
          </ProductSection>
        </div>

      </ShoppingContainer>
  )
}

