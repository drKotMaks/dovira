import React from 'react';
import classNames from 'classnames';
import styles from './items-label.module.scss';

const ItemLable = ({item}) => {
  return (
    <span className={styles.item}>{item}</span>
  );
};


export default ItemLable;
