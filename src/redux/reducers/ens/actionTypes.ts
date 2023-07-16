import { ensDetails } from './state';

export const GET_ENS_DETAILS = 'GET_ENS_DETAILS';
export const GET_ENS_DETAILS_SUCCESS = 'GET_ENS_DETAILS_SUCCESS';
export const GET_ENS_DETAILS_FAIL = 'GET_ENS_DETAILS_FAIL';

export interface GetENSDetails {
  type: typeof GET_ENS_DETAILS;
}

export interface GetENSDetailsSuccess {
  type: typeof GET_ENS_DETAILS_SUCCESS;
  payload: ensDetails;
}

export interface GetENSDetailsFail {
  type: typeof GET_ENS_DETAILS_FAIL;
  payload: any;
}

export type ensDispatchTypes = GetENSDetails | GetENSDetailsSuccess | GetENSDetailsFail;
