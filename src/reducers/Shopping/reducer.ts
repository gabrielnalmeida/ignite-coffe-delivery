import { produce } from 'immer'
import { ActionTypes } from './actions'
import { Product } from '../../@types/product'

interface ShoppingState {
  shoppingCart: Product[];
}

export const productReducer = (state: ShoppingState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, draft => {
        const productIndex = draft.shoppingCart.findIndex(product => product.id === action.payload.product.id);

        if (productIndex >= 0) {
          draft.shoppingCart[productIndex].quantity += action.payload.quantity;
        } else {
          draft.shoppingCart.push({
            ...action.payload.product,
            quantity: action.payload.quantity,
          });
        }
      });

    case ActionTypes.INCREASE_QUANTITY:
      return produce(state, draft => {
        const productIndex = draft.shoppingCart.findIndex(product => product.id === action.payload.id);

        if (productIndex >= 0) {
          draft.shoppingCart[productIndex].quantity += 1;
        }
      });

    case ActionTypes.REDUCE_QUANTITY:
      return produce(state, draft => {
        const productIndex = draft.shoppingCart.findIndex(product => product.id === action.payload.id);

        if (productIndex >= 0) {
          draft.shoppingCart[productIndex].quantity -= 1;
        }
      });

    case ActionTypes.REMOVE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.shoppingCart.findIndex(product => product.id === action.payload.id);

        if (productIndex >= 0) {
          draft.shoppingCart.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
}