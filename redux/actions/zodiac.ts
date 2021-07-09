import axios from 'axios';
import { xml2json } from 'xml-js';

import { Dispatch } from 'redux';
import { zodiacActionType, zodiacActions } from '../../types/zodiacTypeRedux';

export const fetchZodiac = () => {
  return async (dispatch: Dispatch<zodiacActions>) => {
    try {
      dispatch({ type: zodiacActionType.FETCH_ZODIAC_PENDING });

      const response = await axios.get('https://ignio.com/r/export/utf/xml/daily/com.xml', {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
      const result = xml2json(response.data, { compact: false, spaces: 4 });

      const zodiacs = JSON.parse(result);
      dispatch({ type: zodiacActionType.FETCH_ZODIAC_SUCCESS, payload: zodiacs });
    } catch (e) {
      dispatch({
        type: zodiacActionType.FETCH_ZODIAC_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
