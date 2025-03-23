import { produce } from 'immer'
import { ActionTypes } from './actions'
import { Address } from '../../@types/address'

interface CustomerAddressState {
  customerAddress: Address;
}

export const customerReducer = (state: CustomerAddressState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_CUSTOMER_ADDRESS:
      return produce(state, draft => {
        draft.customerAddress = action.payload
      });

    default:
      return state;
  }
}