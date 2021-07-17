import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';

import styles from '../../../../styles/MainContent/Divination/YesNo.module.scss';

type yesNoDataType = {
  image: string;
  name: string;
  text: string;
  result: string;
};

interface ILoveData {
  yesNoData: yesNoDataType;
}

const Card = ({ yesNoData }: ILoveData) => {
  const router = useRouter();
  const onClickButton = () => {
    router.push('/divination/yesNo');
  };
  return (
    <section>
      <div className={styles.yesNo__wrapperCards}>
        <div className={styles.yesNo__column}>
          <div className={styles.yesNo__imgCard}>
            <Image layout='fill' objectFit='cover' src={yesNoData.image} alt='Карта таро' />
          </div>
        </div>
        <div className={styles.yesNo__column}>
          <h2 className={styles.yesNo__name}>{yesNoData.name}</h2>
          <div className={styles.yesNo__result}>{yesNoData.result}</div>
          <p className={styles.yesNo__resultText}>{yesNoData.text}</p>
          <div className={styles.yesNo__buttonWrapper}>
            <button onClick={onClickButton} className={styles.yesNo__button}>
              Выбрать другую карту
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const yesNoCardCollection = db.collection('yesnoCard');

  const cards = await yesNoCardCollection.find({}, { _id: 1 } as any).toArray();

  client.close();
  return {
    fallback: 'blocking',
    paths: cards.map((card) => ({ params: { cardId: card._id.toString() } })),
  };
}

export async function getStaticProps(context: { params: { cardId: string } }) {
  const cardId = context.params.cardId;

  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const yesNoCardCollection = db.collection('yesnoCard');

  const selectedCard = await yesNoCardCollection.findOne({ _id: new ObjectId(cardId) });

  client.close();
  return {
    props: {
      yesNoData: {
        text: selectedCard.text,
        image: selectedCard.image,
        result: selectedCard.result,
        name: selectedCard.name,
      },
    },
  };
}
