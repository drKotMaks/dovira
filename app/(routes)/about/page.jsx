import React from 'react';
import styles from './about.module.scss';
import Image from 'next/image';
import ItemUnivers from '@/app/_components/ItemUnivers';
import { setting } from '@/lib/setting';

const page = () => {
  return (
    <div className={styles.about}>
      <div className={styles.description}>
        <ItemUnivers title="Адреса" description={setting.adress} />
        <ItemUnivers title="Телефон" description={setting.phone_primery} />
        <ItemUnivers title="Графік роботи" description={setting.schedulle} />
      </div>
      <Image 
        width={500}
        height={500}
        alt={setting.fullTitle}
        className={styles.img1}  
        src="/about.jpg"
      />

    </div>
  );
};

export default page;