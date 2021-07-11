import axios from 'axios';

import { Dispatch } from 'redux';
import { MongoClient, ObjectID } from 'mongodb';

import { divinationActions, divinationActionType } from '../../types/divinationTypeRedux';

export const fetchDivinationCard = (id: string) => {
  return async (dispatch: Dispatch<divinationActions>) => {
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://user:49aceL0KoweobEh2@cluster0.phxkt.mongodb.net/commerce?retryWrites=true&w=majority',
      );

      const db = client.db();

      const yesnoCollection = db.collection('yesnoCard');

      const response = await yesnoCollection.findOne({ _id: new ObjectID(id) });

      dispatch({ type: divinationActionType.FETCH_DIVINATION_SUCCESS, payload: response.data });

      client.close();
    } catch (e) {
      dispatch({
        type: divinationActionType.FETCH_DIVINATION_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
