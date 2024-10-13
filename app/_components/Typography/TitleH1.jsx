import styles from './typography.module.scss';
import { Suspense } from 'react';

export default function TitleH1({text}){
   
    

    return(
        <Suspense fallback={<h2>Loading...</h2>}>
        
        <div className='w-full max-w-screen-lg m-auto'>
        <h1 className={styles.h2Text}>{text}</h1>
        </div>
        </Suspense>
    );

}

