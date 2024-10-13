import PriceItem from '@/app/_components/PriceItem/PriceItem';
import React from 'react';
import classNames from 'classnames';
import styles from './price-services.module.scss';
import TitleH1 from '@/app/_components/Typography/TitleH1';

const PriceServices = ({prices}) => {
  return (
    <div className={styles.PriceBlock}>
      <TitleH1 text="Наші прозорі ціни:"/>

      {prices.map((price, index)=>(<PriceItem key={index} price={price}/>))}
      
    </div>
  );
};

export default PriceServices;