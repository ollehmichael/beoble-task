import { GET_ENS_DETAILS, GET_ENS_DETAILS_SUCCESS, GET_ENS_DETAILS_FAIL, ensDispatchTypes } from './actionTypes';
import { ensDetails } from './state';

export interface IDefaultENSState {
  ensDetails: ensDetails | null;
  isLoading: boolean;
  isError: boolean;
  errorMsg: any | null;
}

export const defaultENSState: IDefaultENSState = {
  ensDetails: null,
  isLoading: false,
  isError: false,
  errorMsg: null,
};

const ensReducer = (state: IDefaultENSState = defaultENSState, action: ensDispatchTypes): IDefaultENSState => {
  switch (action.type) {
    case GET_ENS_DETAILS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: null,
      };
    case GET_ENS_DETAILS_SUCCESS:
      return {
        ...state,
        ensDetails: action.payload,
        isLoading: false,
        isError: false,
        errorMsg: null,
      };
    case GET_ENS_DETAILS_FAIL:
      return {
        ...state,
        ensDetails: null,
        isLoading: false,
        isError: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default ensReducer;
