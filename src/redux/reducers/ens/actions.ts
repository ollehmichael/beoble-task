import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../stores/store';
import { GET_ENS_DETAILS_SUCCESS, GET_ENS_DETAILS_FAIL, GET_ENS_DETAILS } from './actionTypes';
import { webServices } from '../../stores/api';

export const getENSDetails = ({ address }: { address: string }): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ENS_DETAILS });
      const response = await axios.post(`${webServices.getENSDetails}/${address}`);
      dispatch({
        type: GET_ENS_DETAILS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ENS_DETAILS_FAIL,
        payload: JSON.stringify(err),
      });
    }
  };
};
