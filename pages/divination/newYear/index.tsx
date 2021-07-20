import Image from 'next/image';
import {
  cardNewYearImg,
  DivinationCard,
  divinationMoneyImg,
  usuallyCards,
  yesNoImg,
} from '../../../components';
import useRandomClickCard from '../../../components/helpers/hooks/useRandomClickCard';
import styles from '../../../styles/MainContent/Divination/newYear.module.scss';

const NewYear = () => {
  const {
    cardLoveImg,
    cardCareerImg,
    cardWellnessImg,
    cardLoveDescription,
    cardCareerDescription,
    cardWellnessDescription,
    onClickCareerCard,
    onClickWellnessCard,
    onClickLoveCard,
  } = useRandomClickCard();
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
          <div onClick={onClickCareerCard} className={styles.newYear__img}>
            <Image src={!cardCareerImg ? cardNewYearImg : cardCareerImg} alt='Карта таро' />
          </div>
          <div className={styles.newYear__cardInfo}>Карьера</div>
        </div>
        <div className={styles.newYear__item}>
          <div onClick={onClickWellnessCard} className={styles.newYear__img}>
            <Image src={!cardWellnessImg ? cardNewYearImg : cardWellnessImg} alt='Карта таро' />
          </div>
          <div className={styles.newYear__cardInfo}>Удача</div>
        </div>
      </div>
      {cardLoveDescription && (
        <>
          <h3 className={styles.newYear__cardTitle}>Любовь</h3>
          <p className={styles.newYear__cardDescription}>{cardLoveDescription}</p>
        </>
      )}
      {cardCareerDescription && (
        <>
          <h3 className={styles.newYear__cardTitle}>Карьера</h3>
          <p className={styles.newYear__cardDescription}>{cardCareerDescription}</p>
        </>
      )}
      {cardWellnessDescription && (
        <>
          <h3 className={styles.newYear__cardTitle}>Удача</h3>
          <p className={styles.newYear__cardDescription}>{cardWellnessDescription}</p>
        </>
      )}
      <h3 className={styles.newYear__title}>Попробуйте другие онлайн гадания</h3>
      <div className={styles.newYear__row}>
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

export default NewYear;
