import { zodiacActionType, zodiacActions, zodiacState } from '../../types/zodiacTypeRedux';
const initialState: zodiacState = {
  items: {},
  loading: false,
  error: '',
};

export const zodiac = (state = initialState, action: zodiacActions): zodiacState => {
  switch (action.type) {
    case zodiacActionType.FETCH_ZODIAC_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case zodiacActionType.FETCH_ZODIAC_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
