"use client";

import React from 'react';
import styles from './price-item-cart.module.scss';
import { Checkbox } from "@/components/ui/checkbox";
import useStore from "@/app/store/store"; // імпортуємо наш Zustand store

const PriceItemCart = ({ price }) => {
    const togglePrice = useStore((state) => state.togglePrice); // отримуємо функцію togglePrice з нашого стора
    const selectedPrices = useStore((state) => state.selectedPrices); // отримуємо список вибраних цін

    const handleCheckboxChange = () => {
        togglePrice(price); // передаємо весь об'єкт ціни
    };


    const isChecked = selectedPrices.some(p => p.id === price.id); // перевіряємо чи вибраний цей чекбокс
    console.log(selectedPrices);

    return (
        <div className={styles.PriceItem}>
             
            <div className={styles.TitlePriceItem}>
                <Checkbox id={price.id} checked={isChecked} onCheckedChange={handleCheckboxChange} />
                <div className={styles.TitlePriceText} htmlFor={price.id}>
                    {price.titlE}
                </div>
               
            </div>

            <div className={styles.Cost}>
      
      
    </div>
        

        </div>
    );
};

export default PriceItemCart;
