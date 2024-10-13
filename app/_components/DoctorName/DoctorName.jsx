import React from 'react';
import styles from './doctor-name.module.scss'
import  {StatusYes}  from '@/public/svgs';


const DoctorName = ({nameDoctor, lastName, status }) => {
  

  return (
    <div className={styles.nameDoctor}>
        <div className={styles.FirstName}> {nameDoctor} </div>
        <div className={styles.lastName}> {lastName} </div>
        {status?<div className={styles.iconStatus}><StatusYes/></div>:null}
    </div>
  );
};

export default DoctorName;