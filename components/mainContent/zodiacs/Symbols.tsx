import Link from 'next/link';

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
  const zodiacContent = [
    {
      id: 1,
      name: 'Овен',
      type: 'aries',
      img: ariesSvg,
      alt: 'Изображение овна',
    },
    {
      id: 2,
      name: 'Рак',
      type: 'cancer',
      img: cancerSvg,
      alt: 'Изображение рака',
    },
    {
      id: 3,
      name: 'Близнецы',
      type: 'gemini',
      img: geminiSvg,
      alt: 'Изображение близнецов',
    },
    {
      id: 4,
      name: 'Лев',
      type: 'leo',
      img: leoSvg,
      alt: 'Изображение льва',
    },
    {
      id: 5,
      name: 'Телец',
      type: 'aries',
      img: taurusSvg,
      alt: 'Изображение тельца',
    },
    {
      id: 6,
      name: 'Дева',
      type: 'virgo',
      img: virgoSvg,
      alt: 'Изображение девы',
    },
    {
      id: 7,
      name: 'Весы',
      type: 'libra',
      img: libraSvg,
      alt: 'Изображение весов',
    },
    {
      id: 8,
      name: 'Скорпион',
      type: 'scorpio',
      img: scorpioSvg,
      alt: 'Изображение скорпиона',
    },
    {
      id: 9,
      name: 'Стрелец',
      type: 'sagittarius',
      img: bowSvg,
      alt: 'Изображение стрельца',
    },
    {
      id: 10,
      name: 'Козерог',
      type: 'capricorn',
      img: capricornSvg,
      alt: 'Изображение козерога',
    },
    {
      id: 11,
      name: 'Водолей',
      type: 'aquarius',
      img: aquaSvg,
      alt: 'Изображение водолея',
    },
    {
      id: 12,
      name: 'Рыбы',
      type: 'pisces',
      img: fishSvg,
      alt: 'Изображение рыб',
    },
  ];
  return (
    <div className={styles.symbols}>
      <div className={styles.symbols__wrapper}>
        <h3 className={styles.symbols__title}>Гороскоп на сегодня</h3>
        <ul className={styles.symbols__zodiac}>
          {zodiacContent.map((zodiac) => (
            <Link key={`${zodiac.id}__${zodiac.name}`} href={`/zodiacs/${zodiac.type}`}>
              <a>
                <SymbolsItem img={zodiac.img} name={zodiac.name} alt={zodiac.alt} />
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Symbols;
