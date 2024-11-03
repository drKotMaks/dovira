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
                    <h2 className="text-3xl md:text-4xl text-white font-semibold">{setting.description}</h2>
                    </div>
                    <LinkButton text="Записатися" href="`/categories/white`" />
                </div>
            </div>
            <div className={styles.MainBlockInfo}>
                <div className={styles.BlockLeft}>
                    
                        <div className={styles.BlockLeftTop}>
                            <p className={styles.headerTopLeft}>
                                Найновіші технології
                            </p>
                            <div className={styles.divHeader}>
                            <Link href={`/categories/white`}>
                            <h4 className={styles.header3}>
                                Сервіси...
                            </h4> </Link>
                            
                            </div>
                        </div>
                   
                    <div className={styles.BlockLeftBottom}>
                        <Button title="Все про вініри"/>
                        
                    </div>
                </div>
                
                <div className={styles.BlockRight}>
                    <p className={styles.header1}>Тільки професіонали</p>
                    <div className={styles.divHeader}>
                    <Link href={`/doctors/svasl`}>
                        <h4 className={styles.header2}>Лікарі...</h4>
                    </Link>
                    </div>
                </div>
                
            </div>
        </div>
  );
};

export default CallToActionNew;
