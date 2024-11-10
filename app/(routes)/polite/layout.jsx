import React from 'react';
import styles from './polite.module.scss';

const layout = ({children}) => {
  return (
    <div className={styles.politeLayout}>
     {children}
    </div>
  );
};

export default layout;