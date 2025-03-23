import { createContext, useEffect, useReducer } from "react";
import { Product } from "../@types/product";
import { productReducer } from "../reducers/Shopping/reducer";

interface ProductContextType {
  shoppingCart: Product[];
  addToCart: (product: Product, quantity: number) => void;
  increaseQuantity: (product: Product) => void;
  reduceQuantity: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

export const ProductContext = createContext<ProductContextType>({
  shoppingCart: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  reduceQuantity: () => {},
  removeFromCart: () => {},
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
        initialState.shoppingCart = JSON.parse(cartItems);
      }

      return initialState;
    }
  );

  const { shoppingCart } = cartState;

  useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCart);

    localStorage.setItem('@ignite-coffe-shop:shopping-cart-1.0.0', stateJSON);
  }, [shoppingCart]);

  function addToCart(product: Product, quantity: number) {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  }

  function increaseQuantity(product: Product) {
    dispatch({ type: 'INCREASE_QUANTITY', payload: product });
  }

  function reduceQuantity(product: Product) {
    dispatch({ type: 'REDUCE_QUANTITY', payload: product });
  }

  function removeFromCart(product: Product) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  }

  return (
    <ProductContext.Provider value={{ 
      shoppingCart, 
      addToCart, 
      increaseQuantity, 
      reduceQuantity, 
      removeFromCart 
      }}>
      {children}
    </ProductContext.Provider>
  );
}