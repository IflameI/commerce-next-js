import { zodiacActionType, zodiacActions, zodiacState } from '../../types/zodiacTypeRedux';
import { HYDRATE } from 'next-redux-wrapper';
const initialState: zodiacState = {
  items: {
    data: {
      elements: [
        {
          0: {
            elements: [],
          },
        },
      ],
    },
  },
  loading: false,
  error: '',
};

export const zodiac = (state = initialState, action: any): zodiacState => {
  switch (action.type) {
    case zodiacActionType.FETCH_ZODIAC_PENDING:
      return { ...state, loading: true };
    case zodiacActionType.FETCH_ZODIAC_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case zodiacActionType.FETCH_ZODIAC_ERROR:
      return { ...state, loading: false, error: action.payload };
    case [HYDRATE]:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
