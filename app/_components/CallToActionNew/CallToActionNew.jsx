import React from 'react';
import styles from './call-to-action-new.module.scss'
import LinkButton from '../Link/LinkButton';
import Button from '../Button/Button';
import Link from 'next/link';
import { setting } from '@/lib/setting';

const CallToActionNew = () => {
  return (
    <div className={styles.root}>
            <div className={styles.ImageBlock}>
                <div className={styles.SuperMain}>
                    <div className={styles.TitleMain}>
                    <span className="block mb-3 text-sm text-yellow-600 font-semibold uppercase">{setting.fullTitle}</span>
                    <h2 className="text-3xl md:text-4xl text-white font-semibold">{setting.h2}</h2>
                    </div>
                    <LinkButton text="Записатися" href="/categories/white" />
                </div>
            </div>
            <div className={styles.MainBlockInfo}>
                <div className={styles.BlockLeft}>
                    
                        <div className={styles.BlockLeftTop}>
                            <p className={styles.headerTopLeft}>
                                {setting.button_2}
                            </p>
                            <div className={styles.divHeader}>
                            <Link href={`/categories/white`}>
                            <h4 className={styles.header3}>
                                {setting.button_1}
                            </h4> </Link>
                            
                            </div>
                        </div>
                   
                    <div className={styles.BlockLeftBottom}>
                        <Button title={setting.button_title}/>
                        
                    </div>
                </div>
                
                <div className={styles.BlockRight}>
                    <p className={styles.header1}>{setting.button_4}</p>
                    <div className={styles.divHeader}>
                    <Link href={`/doctors/svasl`}>
                        <h4 className={styles.header2}>{setting.button_3}</h4>
                    </Link>
                    </div>
                </div>
                
            </div>
        </div>
  );
};

export default CallToActionNew;
