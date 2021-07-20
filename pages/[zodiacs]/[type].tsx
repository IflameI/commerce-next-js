import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NextThunkDispatch, wrapper } from '../../redux/store';

import styles from '../../styles/MainContent/Zodiacs/SingleSimbol.module.scss';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';
import { fetchZodiac } from '../../redux/actions/zodiac';
import useConvertLanguage from '../../components/helpers/hooks/useConvertLanguage';

import {
  DivinationCard,
  divinationMoneyImg,
  insideImg,
  Loader,
  usuallyCards,
  yesNoImg,
} from '../../components';

const SymbolsId = () => {
  const [loading, setLoading] = useState<boolean>(false);
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
            <h2 className={styles.symbol__subtitle}>Ваш гороскоп</h2>
            <p className={styles.symbol__text}>{convertedText}</p>
          </div>
          <div className={styles.symbol__content}>
            <h3 className={styles.symbol__subtitle}>Попробуйте онлайн гадание</h3>
            <div className={styles.symbol__row}>
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
