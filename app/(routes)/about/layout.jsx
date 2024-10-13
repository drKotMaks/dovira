import React from 'react';
import styles from './about.module.scss';

const layout = ({children}) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

export default layout;