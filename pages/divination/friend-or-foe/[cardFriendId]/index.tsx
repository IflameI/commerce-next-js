import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';

import styles from '../../../../styles/MainContent/Divination/FriendOrFoe.module.scss';

type friendDataType = {
  image: string;
  name: string;
  text: string;
};

interface IFriendData {
  friendData: friendDataType;
}

const Card = ({ friendData }: IFriendData) => {
  const router = useRouter();
  const onClickButton = () => {
    router.push('/divination/friend-or-foe');
  };
  return (
    <section>
      <div className={styles.friend__wrapperCards}>
        <div className={styles.friend__column}>
          <div className={styles.friend__imgCard}>
            <Image layout='fill' objectFit='cover' src={friendData.image} alt='Карта таро' />
          </div>
        </div>
        <div className={styles.friend__column}>
          <h2 className={styles.friend__name}>{friendData.name}</h2>
          <p className={styles.friend__resultText}>{friendData.text}</p>
          <div className={styles.friend__buttonWrapper}>
            <button onClick={onClickButton} className={styles.friend__button}>
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

  const friendCardCollection = db.collection('friendCard');

  const cards = await friendCardCollection.find({}, { _id: 1 } as any).toArray();

  client.close();
  return {
    fallback: 'blocking',
    paths: cards.map((card) => ({ params: { cardFriendId: card._id.toString() } })),
  };
}

export async function getStaticProps(context: { params: { cardFriendId: string } }) {
  const cardId = context.params.cardFriendId;

  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const friendCardCollection = db.collection('friendCard');

  const selectedCard = await friendCardCollection.findOne({ _id: new ObjectId(cardId) });

  client.close();
  return {
    props: {
      friendData: {
        text: selectedCard.text,
        image: selectedCard.image,
        name: selectedCard.name,
      },
    },
  };
}
