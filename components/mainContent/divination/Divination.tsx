import styles from '../../../styles/MainContent/Divination/Divination.module.scss';
import {
  DivinationCard,
  usuallyCards,
  yesNoImg,
  revnostImg,
  hristmansImg,
  marriageImg,
  divinationMoneyImg,
} from '../../';

const Divination: React.FC = () => {
  return (
    <div className={styles.divination}>
      <h3 className={styles.divination__title}>Онлайн гадание</h3>
      <p className={styles.divination__description}>
        Старинные ведические техники гадания помогут вам в решении любых жизненных проблем
      </p>
      <div className={styles.divination__content}>
        <div className={styles.divination__row}>
          <DivinationCard
            img={usuallyCards}
            alt='Расклад из карт'
            name='Что думает вторая половинка о вас'
            text='Если вы хотите узнать, что ваш любимый человек на самом деле думает о вас, какие чувства  в нем бурлят, это гадание для вас. Проверенный десятками лет, метод гадания от
            ведических предсказателей поможет вам сделать верный выбор в трудной жизненной ситуации'
            link='yesNo2'
          />
          <DivinationCard
            img={yesNoImg}
            alt='Весы да или нет'
            name='Гадание методом да или нет'
            text='Один из самых древних методов гадания созданный еще во времена основателей ведической астрологии. Вам всего лишь нужно мысленно задать вопрос и выбрать карту, после чего вы получите ответ либо положительный ответ, либо отрицательный'
            link='yesNo'
          />
          <DivinationCard
            img={divinationMoneyImg}
            alt='Гадание на денежное состояние'
            name='Гадание на денежное состояние'
            text='Счастье за ​​деньги не купишь, но они действительно облегчают жизнь! Это чтение дает советы по зарабатыванию денег и финансовые советы, которые помогут вам разбогатеть (или, по крайней мере, иметь меньше долгов).'
            link='money'
          />
          <DivinationCard
            img={revnostImg}
            alt='Расклад на измену'
            name='Гадание на измену в отношениях'
            text='Сомневаетесь в честности второй половинки? Вас мучают навязчивые мысли об измене? Это онлайн гадание расскажет вам правду'
            link='yesNo4'
          />
          <DivinationCard
            img={hristmansImg}
            alt='Изображения нового года'
            name='Что вас ждет в новом году'
            text='Этот расклад из карт таро, поможет вам прожить новый год с большим удовольствием. Вы узнаете, какие испытания и сюрпризы вас поджидают в новом году'
            link='newYear'
          />
          <DivinationCard
            img={marriageImg}
            alt='Счастливая пара'
            name='Ежедневное гадание на любовь в отношениях'
            text='Получите прогноз своей личной жизни с этим гаданием Таро о любви на каждый день. Относитесь к своей романтической жизни с уверенностью.'
            link='love'
          />
        </div>
      </div>
    </div>
  );
};

export default Divination;
