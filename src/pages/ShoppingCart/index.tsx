import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressForm, AddressSection, SoloInput, ProductSection, SectionTitle, ShoppingContainer, DuoInput, TrioInput, FormRow, ProductsCard } from "./styles";
import * as zod from "zod";
import { Address } from "../../@types/address";
import { useContext, useReducer } from "react";
import { CustomerContext } from "../../contexts/CustomerContext";

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
  
  return (
      <ShoppingContainer>
        <AddressSection>
          <SectionTitle>Complete seu pedido</SectionTitle>
            <AddressForm onSubmit={handleSubmit(handleSetCustomerAddress)}>
              <FormProvider {...newAddressForm}>
                  <FormRow>
                    <SoloInput type="text" placeholder="CEP" />
                  </FormRow>
                  <FormRow>
                    <SoloInput type="text" placeholder="Rua" />
                  </FormRow>
                  <FormRow>
                    <DuoInput type="text" placeholder="Número" />
                    <DuoInput type="text" placeholder="Complemento" />
                  </FormRow>
                  <FormRow>
                    <TrioInput type="text" placeholder="Bairro" />
                    <TrioInput type="text" placeholder="Cidade" />
                    <TrioInput type="text" placeholder="Estado" />
                  </FormRow>
              </FormProvider>
            </AddressForm>
        </AddressSection>
        <ProductSection>
          <SectionTitle>Cafés selecionados</SectionTitle>
          <ProductsCard>

          </ProductsCard>
        </ProductSection>
      </ShoppingContainer>
  )
}

