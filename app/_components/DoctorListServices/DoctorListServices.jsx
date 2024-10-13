import React from 'react';
import styles from './doctors-list.module.scss';
import Image from 'next/image';
import Button from '../Button/Button';
import ItemLable from '../ItemLable/ItemLable';
import Link from 'next/link';

const DoctorListServices = ({doctor}) => {

    const ImageDoctor = doctor?.imageDoctor?.url || '';
  return (
    <div className={styles.DoctorItem}>
    <div className={styles.Image}>
        <img
            src={ImageDoctor}
            alt="sdf"
            className={styles.img}
            width="500"
            height="500"
        />
        <div className={styles.DoctorDescrition}>
            <div className={styles.div1}>
                <Link href={`/doctors/${doctor.slugDoctor}`} >
                    <div className={styles.DoctorFullName}>
                        <div className={styles.DoctorLastName}>{doctor.nameDoctor}</div>
                        <div className={styles.DoctorName}>{doctor.lastName}</div>
                    </div> 
                </Link> 
                <div className='flex gap-1'>
                {doctor?.majorSpecialy.map((major, index)=>(<ItemLable  item={major} key={index} />))}

                </div>
            
            </div>
            <Button  href="/doctors/ruba" title="Записатися"/>
            <div className={styles.DoctorTime} />
        </div>
    </div>
</div>
  );
};

export default DoctorListServices;