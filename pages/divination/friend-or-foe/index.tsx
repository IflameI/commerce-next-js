import { MongoClient } from 'mongodb';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  cardYesNoImg,
  DivinationCard,
  egyptianImg,
  hristmansImg,
  marriageImg,
} from '../../../components';

import styles from '../../../styles/MainContent/Divination/FriendOrFoe.module.scss';

export type cardType = {
  id: string;
};

const FriendTarot = ({ cards }: any) => {
  return (
    <section>
      <Head>
        <title>Друг или враг онлайн гадание на картах таро</title>
        <meta
          httpEquiv='Content-Type'
          content='Используйте онлайн гадание друг или враг, что бы узнать настоящую сущность выбранного человека. С помощью этого расклада можно увидеть истинную сущность души'></meta>
      </Head>
      <h1 className={styles.friend__title}>Гадание на истинную сущность человека</h1>
      <p className={styles.friend__subtitle}>
        Выберите одну из карт, чтобы узнать является человек другом или врагом вам
      </p>
      <div className={styles.friend__wrapper}>
        <div className={styles.friend__content}>
          {cards.map((card: cardType, index: number) => (
            <div key={`${index}__${card.id}`}>
              <Link href={`/divination/friend-or-foe/${card.id}`}>
                <a className={styles.friend__friendImg}>
                  <Image src={cardYesNoImg} alt='cardYesNo' />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <h2 className={styles.friend__suptitle}>Попробуйте другие онлайн гадания</h2>
      <div className={styles.friend__row}>
        <DivinationCard
          img={egyptianImg}
          alt='Расклад на любовь'
          name='Расклад карт таро методом Египетских астрологов'
          text=' Прикоснитесь к древней мудрости фараонов, чтобы найти ответы и руководство в своей личной
            жизни'
          link='egyptian-tarot'
        />
        <DivinationCard
          img={hristmansImg}
          alt='Изображения нового года'
          name='Что вас ждет в новом году'
          text='Этот расклад из карт таро, поможет вам прожить новый год с большим удовольствием. Вы узнаете, какие испытания и сюрпризы вас поджидают в новом году'
          link='newYear'
        />
        <DivinationCard
          img={marriageImg}
          alt='Счастливая пара'
          name='Ежедневное гадание на любовь в отношениях'
          text='Получите прогноз своей личной жизни с этим гаданием Таро о любви на каждый день. Относитесь к своей романтической жизни с уверенностью.'
          link='love'
        />
      </div>
    </section>
  );
};

export default FriendTarot;

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const friendCardCollection = db.collection('friendCard');

  const initialCards = await friendCardCollection.find().toArray();

  const cards = initialCards.sort(function () {
    return 0.5 - Math.random();
  });

  client.close();
  return {
    props: {
      cards: cards.map((card) => ({
        id: card._id.toString(),
        text: card.text,
      })),
    },
    revalidate: 60,
  };
}
