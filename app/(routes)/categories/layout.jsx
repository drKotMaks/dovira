
import React from 'react'
import CategorySideBar from './_components/CategorySideBar';
import classNames from 'classnames';
import styles from './services.module.scss';

function layout ({children}) {
    return ( 
        <div className={styles.mainblock}>

            <div className={styles.ServSiteBar}>
                
                <CategorySideBar/>
            </div>
            
            <div className={styles.ServicesMainBlock}>
                {children}
            </div>
            
        </div>

    )
}

export default layout;