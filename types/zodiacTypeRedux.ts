export interface zodiacState {
  items: any;
  loading: boolean;
  error: string;
}

export enum zodiacActionType {
  FETCH_ZODIAC_SUCCESS = 'FETCH_ZODIAC_SUCCESS',
  FETCH_ZODIAC_ERROR = 'FETCH_ZODIAC_ERROR',
}

interface fetchZodiacSuccessType {
  type: zodiacActionType.FETCH_ZODIAC_SUCCESS;
  payload: any[];
}
interface fetchZodiacErrorType {
  type: zodiacActionType.FETCH_ZODIAC_ERROR;
  payload: string;
}

export type zodiacActions = fetchZodiacSuccessType | fetchZodiacErrorType;
