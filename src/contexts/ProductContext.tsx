import { createContext, useEffect, useReducer } from "react";
import { Product } from "../reducers/products/reducer";
import { productReducer } from "../reducers/products/reducer";

interface ProductContextType {
  shoppingCart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const ProductContext = createContext<ProductContextType>({
  shoppingCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

interface ProductContextProviderProps {
  children: React.ReactNode;
}

export function ProductProvider({ children }: ProductContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    productReducer, 
    {
      shoppingCart: [],
    },
    (initialState) => {
      const cartItems = localStorage.getItem('@ignite-coffe-shop:shopping-cart-1.0.0');

      if (cartItems) {
        return { shoppingCart: JSON.parse(cartItems) };
      }

      return initialState;
    }
  );

  const { shoppingCart } = cartState;

  useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCart);

    localStorage.setItem('@ignite-coffe-shop:shopping-cart-1.0.0', stateJSON);
  }, [shoppingCart]);

  function addToCart(product: Product) {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  function removeFromCart(product: Product) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  }

  function clearCart() {
    dispatch({ type: 'CLEAR_CART' });
  }

  return (
    <ProductContext.Provider value={{ shoppingCart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ProductContext.Provider>
  );
}