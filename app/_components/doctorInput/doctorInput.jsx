import React, { useEffect } from 'react';
import useDoctors from '@/app/hooks/getDoctors';
import useDoctorStore from '@/app/store/useDoctorStore';

const DoctorInput = ({ params }) => {
  const {doctors} = useDoctors();
  const {setDoctor, doctor:doc} = useDoctorStore()


  // Використовуємо useEffect для встановлення початкового значення на основі params
  useEffect(() => {
    const matchedOption = doctors.find(option => option.slugDoctor === params);
    if (matchedOption) {
       setDoctor(matchedOption)
    }
  }, [params, doctors]);

  return (
    <div>{doc?.nameDoctor} {doc?.lastName}</div>
  );
};

export default DoctorInput;
