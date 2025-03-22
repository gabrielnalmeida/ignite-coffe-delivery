import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge: string[];
}

interface ProductState {
  shoppingCart: Product[];
}

export const productReducer = (state: ProductState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, draft => {
        draft.shoppingCart.push(action.payload);
      });

    case ActionTypes.REMOVE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.shoppingCart.findIndex(product => product.id === action.payload.id);

        if (productIndex >= 0) {
          draft.shoppingCart.splice(productIndex, 1);
        }
      });
    
    case ActionTypes.CLEAR_CART:
      return produce(state, draft => {
        draft.shoppingCart = [];
      });

    default:
      return state;
  }
}