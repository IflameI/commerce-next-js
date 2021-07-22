import { MongoClient } from 'mongodb';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  cardYesNoImg,
  DivinationCard,
  divinationMoneyImg,
  usuallyCards,
  yesNoImg,
} from '../../../components';

import styles from '../../../styles/MainContent/Divination/Love.module.scss';

export type cardType = {
  id: string;
};

const Love = ({ cards }: any) => {
  return (
    <section>
      <Head>
        <title>Онлайн гадание на любовь</title>
        <meta
          httpEquiv='Content-Type'
          content='Истинная любовь и хорошие отношения - залог счастливой жизни. Именно поэтому мы приготовили бесплатное онлайн гадание на любовь, которое поможет вам совершать правильные поступки, не разрушая отношения '></meta>
      </Head>
      <h1 className={styles.love__title}>Расклад карт таро на любовь в отношениях</h1>
      <p className={styles.love__subtitle}>
        Узнавайте, что вас ждет каждый день в романтических отношениях, читая рассклад о любви.
      </p>
      <div className={styles.love__wrapper}>
        <div className={styles.love__content}>
          {cards.map((card: cardType, index: number) => (
            <div key={`${index}__${card.id}`}>
              <Link href={`/divination/love/${card.id}`}>
                <a className={styles.love__loveImg}>
                  <Image src={cardYesNoImg} alt='cardYesNo' />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <h2 className={styles.love__suptitle}>Попробуйте другие онлайн гадания</h2>
      <div className={styles.love__row}>
        <DivinationCard
          img={usuallyCards}
          alt='Расклад из карт'
          name='Кто ваши друзья на самом деле'
          text='Будете ли вы друзьями навсегда? Ваша лучшая подруга действительно предатель? Друзья приходят и уходят ... если вы хотите увлекательного чтения, которое может показать вам, настоящий ли ваш друг, или может вас разочаровать, проконсультируйтесь с вашим Другом или Врагом Таро!'
          link='friend-or-foe'
        />
        <DivinationCard
          img={yesNoImg}
          alt='Весы да или нет'
          name='Гадание методом да или нет'
          text='Один из самых древних методов гадания созданный еще во времена основателей ведической астрологии. Вам всего лишь нужно мысленно задать вопрос, после чего вы получите ответ либо положительный ответ, либо отрицательный'
          link='yesNo'
        />
        <DivinationCard
          img={divinationMoneyImg}
          alt='Гадание на денежное состояние'
          name='Гадание на денежное состояние'
          text='Счастье за ​​деньги не купишь, но они действительно облегчают жизнь! Это чтение дает советы по зарабатыванию денег и финансовые советы, которые помогут вам разбогатеть (или, по крайней мере, иметь меньше долгов).'
          link='money'
        />
      </div>
    </section>
  );
};

export default Love;

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const loveCardCollection = db.collection('loveCard');

  const initialCards = await loveCardCollection.find().toArray();

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
