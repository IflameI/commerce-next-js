import Image from 'next/image';
import { useState } from 'react';
import {
  cardNewYearImg,
  DivinationCard,
  loveImg,
  usuallyCards,
  yesNoImg,
  revnostImg,
  newYearImg,
} from '../../../components';
import styles from '../../../styles/MainContent/Divination/newYear.module.scss';

const newYearData = [
  {
    love: [
      {
        img: revnostImg,
        description: 'Some description',
      },
      {
        img: newYearImg,
        description: 'Some description',
      },
    ],
    career: [{ img: 'Some img', description: 'Some description' }],
    wellness: [{ img: 'Some img', description: 'Some description' }],
  },
];

const NewYear = () => {
  const [cardLoveImg, setCardLoveImg] = useState<any>();

  const getRandomArbitrary = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const onClickLoveCard = () => {
    const randomValue = getRandomArbitrary(0, newYearData[0].love.length - 1);
    if (randomValue) {
      setCardLoveImg(newYearData[0].love[randomValue].img);
    }
  };

  return (
    <section>
      <h1 className={styles.newYear__title}>Расклад карт таро на события 2021 года</h1>
      <p className={styles.newYear__suptitle}>
        Откройте карты ниже, если хотите узнать, как сложится ваша судьба в будущем
      </p>
      <div className={styles.newYear__content}>
        <div className={styles.newYear__item}>
          <div onClick={onClickLoveCard} className={styles.newYear__img}>
            <Image src={!cardLoveImg ? cardNewYearImg : cardLoveImg} alt='Карта таро' />
          </div>
          <div className={styles.newYear__cardInfo}>Любовь</div>
        </div>
        <div className={styles.newYear__item}>
          <div className={styles.newYear__img}>
            <Image src={cardNewYearImg} alt='Карта таро' />
          </div>
          <div className={styles.newYear__cardInfo}>Карьера</div>
        </div>
        <div className={styles.newYear__item}>
          <div className={styles.newYear__img}>
            <Image src={cardNewYearImg} alt='Карта таро' />
          </div>
          <div className={styles.newYear__cardInfo}>Удача</div>
        </div>
      </div>
      <div className={styles.newYear__row}>
        <DivinationCard
          img={usuallyCards}
          alt='Расклад из карт'
          name='Что думает вторая половинка о вас'
          text='Если вы хотите узнать, что ваш любимый человек на самом деле думает о вас, какие чувства  в нем бурлят, это гадание для вас. Проверенный десятками лет, метод гадания от
            ведических предсказателей поможет вам сделать верный выбор в трудной жизненной ситуации'
          link='yesNo3'
        />
        <DivinationCard
          img={yesNoImg}
          alt='Весы да или нет'
          name='Гадание методом да или нет'
          text='Один из самых древних методов гадания созданный еще во времена основателей ведической астрологии. Вам всего лишь нужно мысленно задать вопрос, после чего вы получите ответ либо положительный ответ, либо отрицательный'
          link='yesNo'
        />
        <DivinationCard
          img={loveImg}
          alt='Любовный пасьянс'
          name='Любовный пасьянс'
          text='Этот способ гадания отлично подойдет для людей, которые хотят лучше понять, что происходит в их отношениях. Можно узнать, какие события предвещает будущее  для этого союза и как вторая половинка будет реагировать на них'
          link='yesNo3'
        />
      </div>
    </section>
  );
};

export default NewYear;
