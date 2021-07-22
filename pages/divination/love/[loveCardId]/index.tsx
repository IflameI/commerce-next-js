import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../../styles/MainContent/Divination/Love.module.scss';

type LoveDataType = {
  image: string;
  name: string;
  text: string;
};

interface ILoveData {
  loveData: LoveDataType;
}

const LoveCard = ({ loveData }: ILoveData) => {
  const router = useRouter();
  const onClickButton = () => {
    router.push('/divination/love');
  };
  return (
    <section>
      <Head>
        <title>Расклад карт таро на любовь</title>
      </Head>
      <div className={styles.love__wrapperCards}>
        <div className={styles.love__column}>
          <div className={styles.love__imgCard}>
            <Image layout='fill' objectFit='cover' src={loveData.image} alt='Карта таро' />
          </div>
        </div>
        <div className={styles.love__column}>
          <h2 className={styles.love__name}>{loveData.name}</h2>
          <p className={styles.love__resultText}>{loveData.text}</p>
          <div className={styles.love__buttonWrapper}>
            <button onClick={onClickButton} className={styles.love__button}>
              Выбрать другую карту
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveCard;

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const loveCardCollection = db.collection('loveCard');

  const cards = await loveCardCollection.find({}, { _id: 1 } as any).toArray();

  client.close();
  return {
    fallback: 'blocking',
    paths: cards.map((card) => ({ params: { loveCardId: card._id.toString() } })),
  };
}

export async function getStaticProps(context: { params: { loveCardId: string } }) {
  const cardId = context.params.loveCardId;

  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const loveCardCollection = db.collection('loveCard');

  const selectedCard = await loveCardCollection.findOne({ _id: new ObjectId(cardId) });

  client.close();
  return {
    props: {
      loveData: {
        text: selectedCard.text,
        image: selectedCard.image,
        name: selectedCard.name,
      },
    },
  };
}
