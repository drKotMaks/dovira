import React from 'react';
import classNames from 'classnames';
import styles from './full-text.module.scss';
import parse from 'html-react-parser';

const FullText = ({FullText}) => {
if(!FullText)
  return null

else  return (


    <div className={styles.root}>
     {parse (FullText)}
     
    </div>
  );
};

export default FullText;