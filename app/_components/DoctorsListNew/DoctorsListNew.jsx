"use client"

import React from 'react';
import styles from './doctors-list.module.scss';
import DoctorsItemList from '../DoctorsItemList/DoctorsItemList';
import useDoctors from '@/app/hooks/getDoctors';
import SkeletonDoctor from '../SkeletonCustom/SkeletonDoctor';
import SkeletonBlock from '../SkeletonCustom/SkeletonBlock';
import TitleH1 from '../Typography/TitleH1';
import Doctors from '../Doctors/page';

const DoctorsListNew = () => {
  const {doctors, isError, isLoading} = useDoctors();
  if(isLoading) return <SkeletonBlock/>
  if (isError) return <p>Error loading data.</p>;


  console.log(doctors.lastName)
  console.log(doctors)
  return (
    <div>
      <TitleH1 text="Наші лікарі"/>
    <div className={styles.grid}>
      {doctors.map((doctor, index) => (
        <DoctorsItemList 
          key={index}
          isLoading={isLoading}
          ImageAlt={doctor.lastName}
          ImageSrc={doctor.imageDoctor?.url}
          name={doctor.nameDoctor}
          lastName={doctor.lastName}
          lableArrow={doctor.majorSpecialy} // Можливо, варто показувати спеціальності тут?
          slug={doctor.slugDoctor}
        />
      ))}
    </div></div>
  );
};

export default DoctorsListNew;
