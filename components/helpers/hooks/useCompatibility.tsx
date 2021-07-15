import { useEffect, useState } from 'react';
import {
  aquaSvg,
  ariesSvg,
  bowSvg,
  cancerSvg,
  capricornSvg,
  fishSvg,
  geminiSvg,
  leoSvg,
  libraSvg,
  scorpioSvg,
  taurusSvg,
  virgoSvg,
} from '../..';

const zodiacContent = [
  {
    id: 1,
    name: 'Овен',
    compatibility: 30,
    img: ariesSvg,
  },
  {
    id: 2,
    name: 'Рак',
    compatibility: 30,
    img: cancerSvg,
  },
  {
    id: 3,
    name: 'Близнецы',
    compatibility: 50,
    img: geminiSvg,
  },
  {
    id: 4,
    name: 'Лев',
    compatibility: 45,
    img: leoSvg,
  },
  {
    id: 5,
    name: 'Телец',
    compatibility: 20,
    img: taurusSvg,
  },
  {
    id: 6,
    name: 'Дева',
    compatibility: 10,
    img: virgoSvg,
  },
  {
    id: 7,
    name: 'Весы',
    compatibility: 25,
    img: libraSvg,
  },
  {
    id: 8,
    name: 'Скорпион',
    compatibility: 40,
    img: scorpioSvg,
  },
  {
    id: 9,
    name: 'Стрелец',
    compatibility: 50,
    img: bowSvg,
  },
  {
    id: 10,
    name: 'Козерог',
    compatibility: 20,
    img: capricornSvg,
  },
  {
    id: 11,
    name: 'Водолей',
    compatibility: 10,
    img: aquaSvg,
  },
  {
    id: 12,
    name: 'Рыбы',
    compatibility: 30,
    img: fishSvg,
  },
];
const useCompatibility = (selectedOption: string, selectedOptionTwo: string) => {
  const [selectImg, setSelectImg] = useState<any>(ariesSvg);
  const [selectImgTwo, setSelectImgTwo] = useState<any>(ariesSvg);
  const [compatibility, setCompatibility] = useState<number>(0);
  const [compatibilityTwo, setCompatibilityTwo] = useState<number>(0);

  useEffect(() => {
    zodiacContent.forEach(function (zodiacItem) {
      if (zodiacItem.name === selectedOption) {
        setSelectImg(zodiacItem.img);
        setCompatibility(zodiacItem.compatibility);
      }
    });
  }, [selectedOption]);
  useEffect(() => {
    zodiacContent.forEach(function (zodiacItem) {
      if (zodiacItem.name === selectedOptionTwo) {
        setSelectImgTwo(zodiacItem.img);
        setCompatibilityTwo(zodiacItem.compatibility);
      }
    });
  }, [selectedOptionTwo]);

  return {
    selectImg,
    selectImgTwo,
    compatibility,
    compatibilityTwo,
  };
};

export default useCompatibility;
