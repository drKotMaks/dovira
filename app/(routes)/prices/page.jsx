"use client"

import PricesBlock from '@/app/_components/PricesBlock/PricesBlock';
import TitleH1 from '@/app/_components/Typography/TitleH1';
import getPrices from '@/app/hooks/getPrices';
import React from 'react';

const Prices = () => {
  const { prices, isError, isLoading}  =  getPrices()

  return (
    <div>
        <TitleH1 text="Наші прозорі ціни:"/>
      <PricesBlock prices={prices} />
    </div>
  );
};

export default Prices;