import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

import styles from '../../styles/MainContent/Zodiacs/SingleSimbol.module.scss';

import { fetchZodiac } from '../../redux/actions/zodiac';
import { NextThunkDispatch, wrapper } from '../../redux/store';
import useConvertLanguage from '../../components/helpers/useConvertLanguage';

import {
  DivinationCard,
  insideImg,
  Loader,
  loveImg,
  usuallyCards,
  yesNoImg,
} from '../../components';

const SymbolsId = () => {
  const [loading, setLoading] = useState(false);
  const { items } = useTypedSelector((state) => state.zodiac);
  const { convertedText } = useConvertLanguage(items.horoscope);
  useEffect(() => {
    if (!convertedText) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [convertedText]);
  return (
    <section>
      {loading ? (
        <div className={styles.symbol__loader}>
          <Loader />
        </div>
      ) : (
        <>
          <div className={styles.symbol__img}>
            <Image src={insideImg} alt='#' />
            <p className={styles.symbol__text}>{convertedText}</p>
          </div>
          <div className={styles.symbol__content}>
            <h3 className={styles.symbol__subtitle}>Попробуйте онлайн гадание</h3>
            <div className={styles.symbol__row}>
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
          </div>
        </>
      )}
    </section>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, params }: any) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchZodiac(params.type));
});

export default SymbolsId;
