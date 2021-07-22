import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../../styles/MainContent/Divination/Egyptian.module.scss';

type EgyptianDataType = {
  image: string;
  name: string;
  text: string;
};

interface IEgyptianData {
  egyptianData: EgyptianDataType;
}

const EgyptianCard = ({ egyptianData }: IEgyptianData) => {
  const router = useRouter();
  const onClickButton = () => {
    router.push('/divination/egyptian-tarot');
  };
  return (
    <section>
      <Head>
        <title>Расклад по методике древних египтян</title>
      </Head>
      <div className={styles.egyptian__wrapperCards}>
        <div className={styles.egyptian__column}>
          <div className={styles.egyptian__imgCard}>
            <Image layout='fill' objectFit='cover' src={egyptianData.image} alt='Карта таро' />
          </div>
        </div>
        <div className={styles.egyptian__column}>
          <h2 className={styles.egyptian__name}>{egyptianData.name}</h2>
          <p className={styles.egyptian__resultText}>{egyptianData.text}</p>
          <div className={styles.egyptian__buttonWrapper}>
            <button onClick={onClickButton} className={styles.egyptian__button}>
              Выбрать другую карту
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EgyptianCard;

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const egyptianCardCollection = db.collection('egyptianCard');

  const cards = await egyptianCardCollection.find({}, { _id: 1 } as any).toArray();

  client.close();
  return {
    fallback: 'blocking',
    paths: cards.map((card) => ({ params: { egyptianCardId: card._id.toString() } })),
  };
}

export async function getStaticProps(context: { params: { egyptianCardId: string } }) {
  const cardId = context.params.egyptianCardId;

  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const egyptianCardCollection = db.collection('egyptianCard');

  const selectedCard = await egyptianCardCollection.findOne({ _id: new ObjectId(cardId) });

  client.close();
  return {
    props: {
      egyptianData: {
        text: selectedCard.text,
        image: selectedCard.image,
        name: selectedCard.name,
      },
    },
  };
}
