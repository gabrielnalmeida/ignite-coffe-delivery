import { createContext, useEffect, useReducer } from "react";
import { Address } from "../@types/address";
import { customerReducer } from "../reducers/CustomerAddress/reducer";

interface CustomerContextType {
  customerAddress: Address;
  setCustomerAddress: (address: Address) => void;
}

export const CustomerContext = createContext<CustomerContextType>({
  customerAddress: {
    postalCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  },
  setCustomerAddress: () => {},
});

interface CustomerContextProviderProps {
  children: React.ReactNode;
}

export function CustomerProvider({ children }: CustomerContextProviderProps) {
  const [customerState, dispatch] = useReducer(
    customerReducer, 
    {
      customerAddress: {
        postalCode: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
      },
    },
    (initialState) => {
      const customerAddress = localStorage.getItem('@ignite-coffe-shop:customer-address-1.0.0');

      if (customerAddress) {
        initialState.customerAddress = JSON.parse(customerAddress);
      }

      return initialState;
    }
  );

  const { customerAddress } = customerState;

  useEffect(() => {
    const stateJSON = JSON.stringify(customerAddress);

    localStorage.setItem('@ignite-coffe-shop:customer-address-1.0.0', stateJSON);
  }, [customerAddress]);

  function setCustomerAddress(address: Address) {
    dispatch({ type: 'SET_CUSTOMER_ADDRESS', payload: address });
  }

  return (
    <CustomerContext.Provider value={{ 
      customerAddress,
      setCustomerAddress,
      }}>
      {children}
    </CustomerContext.Provider>
  );
}