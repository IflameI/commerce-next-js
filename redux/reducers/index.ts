import { zodiac } from './zodiac';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  zodiac,
});

export type RootState = ReturnType<typeof rootReducer>;
