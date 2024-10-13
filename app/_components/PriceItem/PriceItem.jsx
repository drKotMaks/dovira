"use client";

import React from 'react';
import styles from './price-item.module.scss';
import Cost from "./_components/Cost.jsx";
import { Checkbox } from "@/components/ui/checkbox";
import useStore from "@/app/store/store"; // імпортуємо наш Zustand store

const PriceItem = ({ price }) => {
    const togglePrice = useStore((state) => state.togglePrice); // отримуємо функцію togglePrice з нашого стора
    const selectedPrices = useStore((state) => state.selectedPrices); // отримуємо список вибраних цін

    const handleCheckboxChange = () => {
        togglePrice(price); // передаємо весь об'єкт ціни
    };

    const isChecked = selectedPrices.some(p => p.id === price.id); // перевіряємо чи вибраний цей чекбокс


    return (
        <div className={styles.PriceItem}>
            <div className={styles.TitlePriceItem}>
                <Checkbox id={price.id} checked={isChecked} onCheckedChange={handleCheckboxChange} />
                <div className={styles.TitlePriceText} htmlFor={price.id}>
                    {price.titlE}
                </div>
                {price.actionPrice === "vIP" && (
                    <div className="bg-yellow-500 text-white px-2 py-0.5 text-sm rounded-full">V.I.P</div>
                )}
                {price.actionPrice === "onsale" && (
                    <div className="bg-red-500 text-white px-2 py-0.5 text-sm rounded-full ">Акція!</div>
                )}
                {price.actionPrice === "new" && (
                    <div className="bg-green-500 text-white px-2 py-0.5 text-sm rounded-full">Новинка</div>
                )}
            </div>

            <Cost oldCost={price.oldCost} costNew={price.costNew} />
        </div>
    );
};

export default PriceItem;
