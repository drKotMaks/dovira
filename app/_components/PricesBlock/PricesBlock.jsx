import PriceItem from '@/app/_components/PriceItem/PriceItem';
import React from 'react';
import classNames from 'classnames';
import styles from './prices.module.scss';
import TitleH1 from '@/app/_components/Typography/TitleH1';

const PricesBlock = ({prices}) => {
  return (
    <div className={styles.PriceBlock}>
      

      {prices.map((price, index)=>(<PriceItem key={index} price={price}/>))}
      
    </div>
  );
};

export default PricesBlock;