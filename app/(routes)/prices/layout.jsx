import React from 'react';
import styles from './prices.module.scss';

const layout = ({children}) => {
  return (
    <div className={styles.pricesLayout}>
     {children}
    </div>
  );
};

export default layout;