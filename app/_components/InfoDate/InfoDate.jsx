import React from 'react';
import styles from './info-date.module.scss';
import { LinkArrow } from '@/public/svgs/ArraySVG';
import { StarDown } from '@/public/svgs';

const InfoDate = ({rating, upDate, vacationStart, vacationEnd}) => {
    const upNewDate = new Date(upDate);
    
    const formattedDate = upNewDate.toLocaleDateString('uk-UA', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });


        const vacationStartDate = new Date(vacationStart);
        const vacationEndDate = new Date(vacationEnd);
        const today = new Date();
        

        const isVacationPeriod =
        today >= vacationStartDate && today <= vacationEndDate;


  return (
    <div className={styles.root}>
        <div className={styles.rating}>
             <StarDown/>
                {rating}
        </div>
        <div className={styles.updated}>
            <LinkArrow/>
            Оновлено:<span>{formattedDate}</span>
        </div>

        {isVacationPeriod && (
            <div className={styles.vacationUntil}>
                Відпустка до:<span>{vacationEndDate.toLocaleDateString('uk-UA')}</span>
            </div>
        )}


    </div>
  );
};

export default InfoDate;