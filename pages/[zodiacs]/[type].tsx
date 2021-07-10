import Image from 'next/image';

import styles from '../../styles/MainContent/Zodiacs/SingleSimbol.module.scss';

import { fetchZodiac } from '../../redux/actions/zodiac';
import { NextThunkDispatch, wrapper } from '../../redux/store';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

import { DivinationCard, infoImg, Loader, loveImg, usuallyCards, yesNoImg } from '../../components';
import useConvertLanguage from '../../components/helpers/useConvertLanguage';

const SymbolsId = () => {
  const { items } = useTypedSelector((state) => state.zodiac);
  const { convertedText } = useConvertLanguage(items.horoscope);
  const { subConvertedText } = useConvertLanguage(items.sign);

  return (
    <>
      {!convertedText ? (
        <div className={styles.symbol__loader}>
          <Loader />
        </div>
      ) : (
        <>
          <div>
            <h1 className={styles.symbol__title}>{subConvertedText}</h1>
            <p className={styles.symbol__text}>{convertedText}</p>
          </div>
          <div className={styles.symbol__content}>
            <h3 className={styles.symbol__title}>Попробуйте онлайн гадание</h3>
            <div className={styles.symbol__row}>
              <DivinationCard
                img={usuallyCards}
                alt='Расклад из карт'
                name='Что думает вторая половинка о вас'
                text='Если вы хотите узнать, что ваш любимый человек на самом деле думает о вас, какие чувства  в нем бурлят, это гадание для вас. Проверенный десятками лет, метод гадания от
            ведических предсказателей поможет вам сделать верный выбор в трудной жизненной ситуации'
              />
              <DivinationCard
                img={yesNoImg}
                alt='Весы да или нет'
                name='Гадание методом да или нет'
                text='Один из самых древних методов гадания созданный еще во времена основателей ведической астрологии. Вам всего лишь нужно мысленно задать вопрос, после чего вы получите ответ либо положительный ответ, либо отрицательный'
              />
              <DivinationCard
                img={loveImg}
                alt='Любовный пасьянс'
                name='Любовный пасьянс'
                text='Этот способ гадания отлично подойдет для людей, которые хотят лучше понять, что происходит в их отношениях. Можно узнать, какие события предвещает будущее  для этого союза и как вторая половинка будет реагировать на них'
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, params }: any) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchZodiac(params.type));
});

export default SymbolsId;
