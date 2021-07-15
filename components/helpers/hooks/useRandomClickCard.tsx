import { useState } from 'react';
import {
  CardCareerEmperorImg,
  CardCareerFoolImg,
  CardCareerHermitImg,
  CardCareerWheelImg,
  CardLoveEmpressImg,
  CardLoveMagicianImg,
  CardLoveStarImg,
  CardLoveTemperanceImg,
  WellnessCardDeathImg,
  WellnessCardJudgementImg,
  WellnessCardLoversImg,
  WellnessCardSunImg,
} from '../..';

//Рандомно выбирает картинку и описание, из массива

const newYearData = [
  {
    love: [
      {
        img: CardLoveStarImg,
        description: 'Some description',
      },
      {
        img: CardLoveEmpressImg,
        description: 'Some description',
      },
      {
        img: CardLoveTemperanceImg,
        description:
          'Независимо от того, одиноки вы или привязаны к персоне, не тратьте время на посещение «горячих точек», которые славятся громкой музыкой или помогают людям встречаться. Вам пора остепениться, так что если вы все еще ищете, отправляйтесь в места, где собираются родственные души нежных натур. Если у вас есть пара, проводите много времени наедине со своим единственным. Это принесет удовлетворение вашим сердцам.',
      },
      {
        img: CardLoveMagicianImg,
        description:
          'Присутствие Мага в этом указывает на то, что вам пора хорошенько подумать о том, чего вы действительно хотите от партнера, а затем пойти и найти это. Если у вас уже есть что-то особенное, вы двое начнете новую фазу в ваших отношениях - гораздо более глубокую. Если вы одиноки, подумайте, где собираются родственные души, и отправляйтесь туда! Они тоже тебя ищут.',
      },
    ],
    career: [
      {
        img: CardCareerFoolImg,
        description:
          'Возможно, мысль об этом еще не пришла вам в голову, но в этом году вы определенно собираетесь произвести большие изменения в отделе работы и карьеры. Когда появляется Дурак, возможно, вам уже скучно и вы беспокоитесь - недовольны типом работы, которую вы выполняете, и определенно жаждете чего-то нового. Хорошая новость в том, что это скоро произойдет, скорее всего вы получите предложение от совершенно неожиданного человека',
      },
      {
        img: CardCareerWheelImg,
        description:
          'Хотя временами вы можете чувствовать себя пешкой в ​​могучей игре судьбы, вам действительно не о чем беспокоиться. Единственное, что вам нужно, - это игнорирование собственных инстинктов, которые всегда были вашими лучшими и самыми надежными союзниками. Слушайте голос своих разумных «антенн», и у вас все будет в порядке, особенно когда дело касается общения с теми, кто стоит над вами - по крайней мере, временно.',
      },
      {
        img: CardCareerHermitImg,
        description:
          'Некоторое время вы обдумывали вопрос о карьере - и в течение этого года вы знаете, что вам придется принять решение. Изо всех сил старайтесь найти то, с чем вы сможете жить, не только сейчас, но и какое-то время в будущем. Как только это будет сделано, вы сможете расслабиться - и, что еще лучше, руководить авторитетно, а это именно то положение, которого, как вы знаете, вы заслуживаете.',
      },
      {
        img: CardCareerEmperorImg,
        description:
          'Этот год будет очень напряженным: нужно будет работать над несколькими проектами и, в конечном итоге, завершить. Начальство будет следить за вами, чтобы убедиться, что вы тоже их правильно доделаете. Если вы много работаете - а это может означать выполнение не только своей работы, но и чужой, - вас ждут потрясающие награды. Однако бросьте мяч, и вас могут вызвать в кабинет босса для серьезного разговора.',
      },
    ],
    wellness: [
      {
        img: WellnessCardDeathImg,
        description:
          'Смерть указывает на то, что пора отделиться от ситуации, которая довольно сильно над вами нависла. Хотя любые огромные изменения пугают, и вы, вероятно, все еще беспокоитесь о том, что будет дальше, пора отпустить прошлое и позволить Вселенной разобраться с деталями. Не пытайтесь цепляться за то, что происходит в вашей жизни. Это не сработает, и вы только задержите свое будущее.',
      },
      {
        img: WellnessCardSunImg,
        description:
          'Солнце - это ядро ​​Вселенной и ядро ​​нас самих, поэтому эта карта представляет именно это: состояние самой сокровенной области нас самих. В это время вы будете очень уверены в себе и довольны собой, и все вокруг будут так же счастливы быть в вашей компании. Вы сможете выполнять задания, которые вас удивят, не говоря уже о тех, что стоят над вами! Поздравляю!',
      },
      {
        img: WellnessCardJudgementImg,
        description:
          'Хорошая новость - нет, самая лучшая новость, которую вы можете услышать сейчас - это то, что после всего этого времени поиска того, кто вы есть на самом деле, вы вот-вот «найдете себя». Кому-то это может показаться глупым, но вы знаете, что это значит.',
      },
      {
        img: WellnessCardLoversImg,
        description:
          'Появление влюбленных указывает на то, что вам пора взять на себя серьезное обязательство. И хотя это, безусловно, может включать в себя новые отношения, обязательство, на котором вы действительно должны сосредоточиться, - это самого себя - привести в равновесие свое тело, разум и дух. Если это включает в себя вдохновение другого, тем лучше. Независимо от того, делаете ли вы это в одиночку или с партнером, найдите свой внутренний баланс.',
      },
    ],
  },
];

const getRandomArbitrary = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const useRandomClickCard = () => {
  const [cardLoveImg, setCardLoveImg] = useState<any>();
  const [cardLoveDescription, setCardLoveDescription] = useState<string>();
  const [cardCareerImg, setCardCareerImg] = useState<any>();
  const [cardCareerDescription, setCardCareerDescription] = useState<string>();
  const [cardWellnessImg, setCardWellnessImg] = useState<any>();
  const [cardWellnessDescription, setCardWellnessDescription] = useState<string>();

  const onClickLoveCard = () => {
    const randomValue = getRandomArbitrary(0, newYearData[0].love.length - 1);
    if (!cardLoveImg) {
      setCardLoveImg(newYearData[0].love[randomValue].img);
      setCardLoveDescription(newYearData[0].love[randomValue].description);
    }
  };
  const onClickCareerCard = () => {
    const randomValue = getRandomArbitrary(0, newYearData[0].career.length - 1);
    if (!cardCareerImg) {
      setCardCareerImg(newYearData[0].career[randomValue].img);
      setCardCareerDescription(newYearData[0].career[randomValue].description);
    }
  };

  const onClickWellnessCard = () => {
    const randomValue = getRandomArbitrary(0, newYearData[0].wellness.length - 1);
    if (!cardWellnessImg) {
      setCardWellnessImg(newYearData[0].wellness[randomValue].img);
      setCardWellnessDescription(newYearData[0].wellness[randomValue].description);
    }
  };

  return {
    cardLoveImg,
    cardCareerImg,
    cardWellnessImg,
    cardLoveDescription,
    cardCareerDescription,
    cardWellnessDescription,
    onClickLoveCard,
    onClickCareerCard,
    onClickWellnessCard,
  };
};
export default useRandomClickCard;
