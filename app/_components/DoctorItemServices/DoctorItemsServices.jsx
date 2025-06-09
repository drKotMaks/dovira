'use client';
import { useEffect, useState } from 'react';
import DoctorListServices from '../DoctorListServices/DoctorListServices';
import styles from './doctor-items.module.scss';
import TitleH1 from '../Typography/TitleH1';
import SkeletonBlock from '../SkeletonCustom/SkeletonBlock';
import { getAllInfoServices } from '@/app/_services/graphQL_custom/QueryGraphQL';
import useServices from '@/app/hooks/useServices';

const DoctorItemsServices = ({ category }) => {
  const query = getAllInfoServices(category);
  const { isLoading, isError, doctors } = useServices(query);

  if (isLoading) return <SkeletonBlock />;
  if (isError) return <div>Помилка завантаження лікарів</div>;
  if (!doctors || doctors.length === 0) return null;

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