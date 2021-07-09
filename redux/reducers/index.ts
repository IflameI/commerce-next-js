import { zodiac } from './zodiac';
import { wrapper } from './wrapper';
import { hydrate } from './hydrate';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  zodiac,
});

export type RootState = ReturnType<typeof rootReducer>;
