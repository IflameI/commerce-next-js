import { MongoClient } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import {
  cardYesNoImg,
  DivinationCard,
  divinationMoneyImg,
  usuallyCards,
  yesNoImg,
} from '../../../components';

import styles from '../../../styles/MainContent/Divination/Egyptian.module.scss';

export type cardType = {
  id: string;
};

const EgyptianTarot = ({ cards }: any) => {
  return (
    <section>
      <h1 className={styles.egyptian__title}>Гадание по методу Египетских астрологов</h1>
      <p className={styles.egyptian__subtitle}>
        Выберите одну из карт, чтобы получить ответы и руководство для своей личной жизни
      </p>
      <div className={styles.egyptian__wrapper}>
        <div className={styles.egyptian__content}>
          {cards.map((card: cardType, index: number) => (
            <div key={`${index}__${card.id}`}>
              <Link href={`/divination/egyptian-tarot/${card.id}`}>
                <a className={styles.egyptian__egyptianImg}>
                  <Image src={cardYesNoImg} alt='cardYesNo' />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <h1 className={styles.egyptian__suptitle}>Попробуйте другие онлайн гадания</h1>
      <div className={styles.egyptian__row}>
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

export default EgyptianTarot;

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const egyptianCardCollection = db.collection('egyptianCard');

  const initialCards = await egyptianCardCollection.find().toArray();

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
