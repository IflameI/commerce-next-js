import { MongoClient } from 'mongodb';
import Link from 'next/link';
import Image from 'next/image';

import {
  cardYesNoImg,
  DivinationCard,
  hristmansImg,
  marriageImg,
  revnostImg,
} from '../../../components';
import styles from '../../../styles/MainContent/Divination/Money.module.scss';
import { cardType } from '../love';

const Money = ({ cards }: any) => {
  return (
    <section>
      <h1 className={styles.money__title}>Гадание на денежное состояние</h1>
      <p className={styles.money__subtitle}>
        Откройте одну из карт ниже, что бы узнать, какие советы, звезды могут вам предложить
      </p>
      <div className={styles.money__wrapper}>
        <div className={styles.money__content}>
          {cards.map((card: cardType, index: number) => (
            <>
              <Link key={`${index}__${card.id}`} href={`/divination/money/${card.id}`}>
                <a className={styles.money__img}>
                  <Image src={cardYesNoImg} alt='cardYesNo' />
                </a>
              </Link>
            </>
          ))}
        </div>
      </div>
      <h1 className={styles.money__suptitle}>Попробуйте другие онлайн гадания</h1>
      <div className={styles.money__row}>
        <DivinationCard
          img={revnostImg}
          alt='Расклад на измену'
          name='Гадание на измену в отношениях'
          text='Сомневаетесь в честности второй половинки? Вас мучают навязчивые мысли об измене? Это онлайн гадание расскажет вам правду'
          link='yesNo4'
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

export default Money;

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const moneyCardCollection = db.collection('moneyCard');

  const initialCards = await moneyCardCollection.find().toArray();

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
