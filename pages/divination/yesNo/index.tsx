import Image from 'next/image';
import Link from 'next/link';

import { cardYesNoImg } from '../../../components';
import styles from '../../../styles/MainContent/Divination/YesNo.module.scss';

const yesNo = () => {
  return (
    <>
      <div className={styles.yesNo__title}>Расклад карт таро методом да или нет</div>
      <div className={styles.yesNo__subtitle}>
        Вам необходим ответ или совет как можно скорее? Гадание на картах таро методом да или нет
        даст вам простой ответ «да» или «нет» и прямой совет. Сосредоточьтесь на своем вопросе и
        выберите свою карту прямо сейчас!
      </div>
      <div className={styles.yesNo__wrapper}>
        <div className={styles.yesNo__content}>
          <Link href='/divination/yesNo/1'>
            <a className={styles.yesNo__yesNoImg}>
              <Image src={cardYesNoImg} alt='cardYesNo' />
            </a>
          </Link>
          <Link href='/divination/yesNo/2'>
            <a className={styles.yesNo__yesNoImg}>
              <Image src={cardYesNoImg} alt='cardYesNo' />
            </a>
          </Link>
          <Link href='/divination/yesNo/3'>
            <a className={styles.yesNo__yesNoImg}>
              <Image src={cardYesNoImg} alt='cardYesNo' />
            </a>
          </Link>
          <Link href='/divination/yesNo/4'>
            <a className={styles.yesNo__yesNoImg}>
              <Image src={cardYesNoImg} alt='cardYesNo' />
            </a>
          </Link>
          <Link href='/divination/yesNo/5'>
            <a className={styles.yesNo__yesNoImg}>
              <Image src={cardYesNoImg} alt='cardYesNo' />
            </a>
          </Link>
          <Link href='/divination/yesNo/6'>
            <a className={styles.yesNo__yesNoImg}>
              <Image src={cardYesNoImg} alt='cardYesNo' />
            </a>
          </Link>
          <Link href='/divination/yesNo/7'>
            <a className={styles.yesNo__yesNoImg}>
              <Image src={cardYesNoImg} alt='cardYesNo' />
            </a>
          </Link>
        </div>
        <p className={styles.yesNo__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, porro? A eos quo iste
          eligendi reiciendis tempora quia ducimus, quos quibusdam modi perferendis voluptatibus
          eius necessitatibus error dolores sed vero tenetur dolorum eveniet. Perferendis impedit
          soluta perspiciatis aspernatur quae, a eaque corrupti corporis? Beatae perferendis
          blanditiis illum voluptatibus eveniet mollitia laboriosam iusto itaque placeat.
        </p>
      </div>
    </>
  );
};

export default yesNo;
