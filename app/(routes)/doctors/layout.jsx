import React from 'react';
import styles from './doctor-layout.module.scss';

const layout = ({children}) => {
  return (
    <div className={styles.doctorLayout}>
     {children}
    </div>
  );
};

export default layout;