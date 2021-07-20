import { MongoClient } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';

import {
  cardYesNoImg,
  DivinationCard,
  hristmansImg,
  marriageImg,
  egyptianImg,
} from '../../../components';
import styles from '../../../styles/MainContent/Divination/YesNo.module.scss';
import { cardType } from '../love';

const yesNo: React.FC = ({ cards }: any) => {
  return (
    <section>
      <h1 className={styles.yesNo__title}>Расклад карт таро методом да или нет</h1>
      <p className={styles.yesNo__subtitle}>
        Вам необходим ответ или совет как можно скорее? Гадание на картах таро методом да или нет
        даст вам простой ответ «да» или «нет» и прямой совет. Сосредоточьтесь на своем вопросе и
        выберите карту прямо сейчас!
      </p>
      <div className={styles.yesNo__wrapper}>
        <div className={styles.yesNo__content}>
          {cards.map((card: cardType, index: number) => (
            <div key={`${index}__${card.id}`}>
              <Link href={`/divination/yesNo/${card.id}`}>
                <a className={styles.yesNo__yesNoImg}>
                  <Image src={cardYesNoImg} alt='cardYesNo' />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <p className={styles.yesNo__text}>
          Техника гадания методом да или нет предполагает, что выбранная вами карта Таро содержат
          символический ответ на вопрос, который вы задали, вслух или мысленно, перед тем, как
          выбрать карту из колоды. Ведические астрологи говорят, что этот метод гадание дает вам
          возможность обьяснить истинные причины случившихся событий, предугадать ход событий,
          узнать настоящие мотивы задействованных лиц. Мастера гадания, на ученые многолетним
          опытом, говорят, что проводить сеанс гадания несколько раз по одной теме не стоит, это
          может привести к плохим результатам
        </p>
      </div>
      <h1 className={styles.yesNo__suptitle}>Попробуйте другие онлайн гадания</h1>
      <div className={styles.yesNo__row}>
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

export default yesNo;

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_DB || '');
  const db = client.db();

  const yesNoCardCollection = db.collection('yesnoCard');

  const initialCards = await yesNoCardCollection.find().toArray();

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
