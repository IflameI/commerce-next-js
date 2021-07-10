import axios from 'axios';

import { Dispatch } from 'redux';
import { zodiacActionType, zodiacActions } from '../../types/zodiacTypeRedux';

export const fetchZodiac = (type: string) => {
  return async (dispatch: Dispatch<zodiacActions>) => {
    try {
      const response = await axios.get(`https://ohmanda.com/api/horoscope/${type}/`);
      dispatch({ type: zodiacActionType.FETCH_ZODIAC_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: zodiacActionType.FETCH_ZODIAC_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
