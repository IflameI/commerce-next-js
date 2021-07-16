import axios from 'axios';

import { Dispatch } from 'redux';
import { MongoClient, ObjectId, ObjectID } from 'mongodb';

import { divinationActions, divinationActionType } from '../../types/divinationTypeRedux';

export const fetchDivinationCardYesNo = (cardId: string) => {
  return async (dispatch: Dispatch<divinationActions>) => {
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://user:APkuFEX1ak1i8GPQ@cluster0.phxkt.mongodb.net/commerce?retryWrites=true&w=majority',
      );
      const db = client.db();

      const yesNoCardCollection = db.collection('yesnoCard');

      const selectedCard = await yesNoCardCollection.findOne({ _id: new ObjectId(cardId) });

      dispatch({ type: divinationActionType.FETCH_DIVINATION_SUCCESS, payload: selectedCard.data });

      client.close();
    } catch (e) {
      dispatch({
        type: divinationActionType.FETCH_DIVINATION_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
