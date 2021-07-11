import {
  divinationState,
  divinationActions,
  divinationActionType,
} from '../../types/divinationTypeRedux';

const initialState: divinationState = {
  items: {},
  error: '',
};

export const divination = (state = initialState, action: divinationActions): divinationState => {
  switch (action.type) {
    case divinationActionType.FETCH_DIVINATION_SUCCESS:
      return { ...state, items: action.payload };
    case divinationActionType.FETCH_DIVINATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
