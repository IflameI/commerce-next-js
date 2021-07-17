import { Dispatch } from 'redux';
import { MongoClient, ObjectId } from 'mongodb';

import { divinationActions, divinationActionType } from '../../types/divinationTypeRedux';

export const fetchDivinationCardYesNo = (cardId: string) => {
  return async (dispatch: Dispatch<divinationActions>) => {
    try {
      const client = await MongoClient.connect(process.env.MONGO_DB || '');
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
