export interface divinationState {
  items: any;
  error: string;
}

export enum divinationActionType {
  FETCH_DIVINATION_SUCCESS = 'FETCH_DIVINATION_SUCCESS',
  FETCH_DIVINATION_ERROR = 'FETCH_DIVINATION_ERROR',
}

interface fetchDivinationSuccessType {
  type: divinationActionType.FETCH_DIVINATION_SUCCESS;
  payload: any[];
}
interface fetchDivinationErrorType {
  type: divinationActionType.FETCH_DIVINATION_ERROR;
  payload: string;
}

export type divinationActions = fetchDivinationSuccessType | fetchDivinationErrorType;
