import React from 'react';
import styles from './../button.module.scss';
import BookingSection from '../../BookingSection/BookingSection';

const ButtonAction = ({params}) => {
  return (
    <BookingSection params={params}>
    <button className={styles.button}>Записатися</button>
    </BookingSection>
  );
};

export default ButtonAction;