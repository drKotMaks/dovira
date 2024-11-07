import React from 'react';
import styles from './about.module.scss';
import Image from 'next/image';
import ItemUnivers from '@/app/_components/ItemUnivers';
import { setting } from '@/lib/setting';
import LocalItem from '@/app/_components/LocalItem/LocalItem';

const page = () => {
  return (
    <div className={styles.about}>
      <div className={styles.description}>
        <LocalItem latitude="49.57730933120542" longitude="34.58098135293587" />
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