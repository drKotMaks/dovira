import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Button from '../Button/Button';

const DoctorsItemList = ({ ImageSrc, ImageAlt, name, lastName, lableArrow, slug, isLoading }) => {

console.log(slug)

    const lables = lableArrow.slice(0, 5);
  return (
    <div className={styles.doctorsBlock}>
      <div className={styles.blockImage}>
        <Image
          className={styles.doctorPhoto} 
          src={ImageSrc}
          alt={ImageAlt} 
          width={500} 
          height={500} 
        />
        <div className={styles.lableImage}>
          {lables.map((item, index)=>(<span key={index} className={styles.lableItem}>{item}</span>))}
        </div>
      </div>

      <div className={styles.discription}>
        <div className={styles.NameDoctors}>{name} {lastName}</div>
        <Button title="переглянути" href={`/doctors/${slug}`} className={styles.buttonDoctor}/>
      </div>
    </div>
  );
};

export default DoctorsItemList;
