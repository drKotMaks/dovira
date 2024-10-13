import React from 'react';
import DoctorListServices from '../DoctorListServices/DoctorListServices';
import styles from './doctor-items.module.scss';
import TitleH1 from '../Typography/TitleH1';

const DoctorItemsServices = ({ doctors }) => {
  if (!doctors || doctors.length === 0) {
    return null;
  }

  return (
      <div className={styles.DoctorsList}>
        <TitleH1 text="Послугу можуть виконати:" />
        <div className={styles.DoctorListBlock}>
          {doctors.map((doctor, index) => (
           <DoctorListServices doctor={doctor} key={index} />
            ))}

        </div>
      </div>
      
    
  );
};

export default DoctorItemsServices;
