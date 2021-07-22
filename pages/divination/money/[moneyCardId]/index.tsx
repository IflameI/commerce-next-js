import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../../styles/MainContent/Divination/Money.module.scss';

type MoneyCardData = {
  image: string;
  name: string;
  text: string;
};

interface IMoneyCard {
  moneyData: MoneyCardData;
}

const MoneyCard: React.FC<IMoneyCard> = ({ moneyData }) => {
  const router = useRouter();
  const onClickButton = () => {
    router.push('/divination/money');
  };
  return (
    <section>
      <Head>
        <title>Расклад для привлечения денег</title>
      </Head>
      <div className={styles.money__wrapperCards}>
        <div className={styles.money__column}>
          <div className={styles.money__imgCard}>
            <Image layout='fill' objectFit='cover' src={moneyData.image} alt='Карта таро' />
          </div>
        </div>
        <div className={styles.money__column}>
          <h2 className={styles.money__name}>{moneyData.name}</h2>
          <p className={styles.money__resultText}>{moneyData.text}</p>
          <div className={styles.money__buttonWrapper}>
            <button onClick={onClickButton} className={styles.money__button}>
              Выбрать другую карту
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyCard;

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const moneyCardCollection = db.collection('moneyCard');

  const cards = await moneyCardCollection.find({}, { _id: 1 } as any).toArray();

  client.close();
  return {
    fallback: 'blocking',
    paths: cards.map((card) => ({ params: { moneyCardId: card._id.toString() } })),
  };
}

export async function getStaticProps(context: { params: { moneyCardId: string } }) {
  const moneyCardId = context.params.moneyCardId;

  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const moneyCardCollection = db.collection('moneyCard');

  const selectedCard = await moneyCardCollection.findOne({ _id: new ObjectId(moneyCardId) });

  client.close();
  return {
    props: {
      moneyData: {
        text: selectedCard.text,
        image: selectedCard.image,
        name: selectedCard.name,
      },
    },
  };
}
