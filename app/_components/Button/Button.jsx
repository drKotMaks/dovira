import React from 'react';
import styles from './button.module.scss';
import Link from 'next/link';
//import Classnames from 'classnames';

const Button = ({title, href}) => {
  if (!href) {
    console.error("`href` не визначений для компонента Button");
    return null; // Або можна повернути щось інше, наприклад, дефолтну кнопку.
  }
  
return (
  <Link href={`${href}`} 
        className={styles.button}>
          {title}
  </Link>
        );
      };

export default Button;


