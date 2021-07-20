import Image from 'next/image';
import { useState } from 'react';

import {
  compatibilityImg,
  DivinationCard,
  divinationMoneyImg,
  usuallyCards,
  yesNoImg,
} from '../../components';
import useCompatibility from '../../components/helpers/hooks/useCompatibility';
import styles from '../../styles/Compatibility/compatibility.module.scss';

const Compatibility: React.FC = () => {
  const options = [
    'Овен',
    'Скорпион',
    'Рыбы',
    'Водолей',
    'Козерог',
    'Стрелец',
    'Весы',
    'Дева',
    'Телец',
    'Лев',
    'Близнецы',
    'Рак',
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOptionTwo, setSelectedOptionTwo] = useState(options[0]);
  const [showResult, setShowResult] = useState<boolean>(false);

  const onClickShowResult = () => {
    setShowResult(true);
  };

  //Хук содержит в себе логику для показывания совместимости знаков зодиака

  const { compatibility, compatibilityTwo, selectImg, selectImgTwo } = useCompatibility(
    selectedOption,
    selectedOptionTwo,
  );
  return (
    <section className={styles.compatibility}>
      <div className={styles.compatibility__image}>
        <Image src={compatibilityImg} alt='Любовный гороскоп' />
      </div>
      <h1 className={styles.compatibility__title}>Совместимость в любви</h1>
      <p className={styles.compatibility__text}>
        Узнайте, будет ли ваше партнерство успешным. Некоторые знаки неба, естественно, хорошо
        работают вместе, но другим нужно идти на компромисс, чтобы заставить отношения работать!
      </p>
      <div className={styles.compatibility__row}>
        <div className={styles.compatibility__column}>
          <div className={styles.compatibility__item}>
            <Image src={selectImg} alt='Знак зодиака' />
            <select
              className={styles.compatibility__select}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.compatibility__column}>
          <div className={styles.compatibility__item}>
            <Image src={selectImgTwo} alt='Знак зодиака' />
            <select
              className={styles.compatibility__select}
              value={selectedOptionTwo}
              onChange={(e) => setSelectedOptionTwo(e.target.value)}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles.compatibility__resultWrapper}>
        {showResult && (
          <p className={styles.compatibility__result}>
            Совместимость этих знаков {compatibility + compatibilityTwo + '%'}
          </p>
        )}
        <button onClick={onClickShowResult} className={styles.compatibility__button}>
          Проверить совместимость
        </button>
      </div>
      <h3 className={styles.compatibility__title}>Попробуйте другие онлайн гадания</h3>
      <div className={styles.compatibility__wrapper}>
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

export default Compatibility;
