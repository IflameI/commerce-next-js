/* eslint-disable import/no-anonymous-default-export */
import * as zodiacActionCreators from './zodiac';
import * as divinationActionCreators from './divination';

export default {
  ...zodiacActionCreators,
  ...divinationActionCreators,
};
