import {
  ariesSvg,
  geminiSvg,
  cancerSvg,
  taurusSvg,
  leoSvg,
  virgoSvg,
  SymbolsItem,
  libraSvg,
  scorpioSvg,
  bowSvg,
  capricornSvg,
  aquaSvg,
  fishSvg,
} from '../..';

import styles from '../../../styles/MainContent/Zodiacs/Symbols.module.scss';

const Symbols: React.FC = () => {
  return (
    <div className={styles.symbols}>
      <div className={styles.symbols__wrapper}>
        <h3 className={styles.symbols__title}>Гороскоп на сегодня</h3>
        <ul className={styles.symbols__zodiac}>
          <SymbolsItem img={ariesSvg} date='04.07.2021' name='Овен' alt='Изображение овена' />
          <SymbolsItem img={cancerSvg} date='04.07.2021' name='Рак' alt='Изображение рака' />
          <SymbolsItem
            img={geminiSvg}
            date='04.07.2021'
            name='Близнецы'
            alt='Изображение близнецов'
          />
          <SymbolsItem img={leoSvg} date='04.07.2021' name='Лев' alt='Изображение льва' />
          <SymbolsItem img={taurusSvg} date='04.07.2021' name='Телец' alt='Изображение тельца' />
          <SymbolsItem img={virgoSvg} date='04.07.2021' name='Дева' alt='Изображение девы' />
          <SymbolsItem img={libraSvg} date='04.07.2021' name='Весы' alt='Изображение весов' />
          <SymbolsItem
            img={scorpioSvg}
            date='04.07.2021'
            name='Скорпион'
            alt='Изображение скорпиона'
          />
          <SymbolsItem img={bowSvg} date='04.07.2021' name='Стрелец' alt='Изображение Стрельца' />
          <SymbolsItem
            img={capricornSvg}
            date='04.07.2021'
            name='Козерог'
            alt='Изображение  козерога'
          />
          <SymbolsItem img={aquaSvg} date='04.07.2021' name='Водолей' alt='Изображение водолея' />
          <SymbolsItem img={fishSvg} date='04.07.2021' name='Рыбы' alt='Изображение рыб' />
        </ul>
      </div>
    </div>
  );
};

export default Symbols;
