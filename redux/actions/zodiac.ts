import axios from 'axios';
import { xml2json } from 'xml-js';

import { Dispatch } from 'redux';
import { zodiacActionType, zodiacActions } from '../../types/zodiacTypeRedux';

export const fetchZodiac = () => {
  return async (dispatch: Dispatch<zodiacActions>) => {
    try {
      dispatch({ type: zodiacActionType.FETCH_ZODIAC_PENDING });
      const response: any = await axios.get('api/');
      dispatch({ type: zodiacActionType.FETCH_ZODIAC_SUCCESS, payload: response });
    } catch (e) {
      dispatch({
        type: zodiacActionType.FETCH_ZODIAC_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
