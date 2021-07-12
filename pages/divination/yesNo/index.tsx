import { MongoClient } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';

import { cardYesNoImg } from '../../../components';
import styles from '../../../styles/MainContent/Divination/YesNo.module.scss';

const yesNo: React.FC = ({ cards }: any) => {
  return (
    <>
      <div className={styles.yesNo__title}>Расклад карт таро методом да или нет</div>
      <div className={styles.yesNo__subtitle}>
        Вам необходим ответ или совет как можно скорее? Гадание на картах таро методом да или нет
        даст вам простой ответ «да» или «нет» и прямой совет. Сосредоточьтесь на своем вопросе и
        выберите свою карту прямо сейчас!
      </div>
      <div className={styles.yesNo__wrapper}>
        <div className={styles.yesNo__content}>
          {cards.map((card: any) => (
            <>
              <Link href={`/divination/yesNo/${card.id}`}>
                <a className={styles.yesNo__yesNoImg}>
                  <Image src={cardYesNoImg} alt='cardYesNo' />
                </a>
              </Link>
            </>
          ))}
        </div>
        <p className={styles.yesNo__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, porro? A eos quo iste
          eligendi reiciendis tempora quia ducimus, quos quibusdam modi perferendis voluptatibus
          eius necessitatibus error dolores sed vero tenetur dolorum eveniet. Perferendis impedit
          soluta perspiciatis aspernatur quae, a eaque corrupti corporis? Beatae perferendis
          blanditiis illum voluptatibus eveniet mollitia laboriosam iusto itaque placeat.
        </p>
      </div>
    </>
  );
};

export default yesNo;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://user:APkuFEX1ak1i8GPQ@cluster0.phxkt.mongodb.net/commerce?retryWrites=true&w=majority',
  );
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
