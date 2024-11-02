
import React from 'react';
import styles from './social-media-link.module.scss';
import InstagramButton from '../Button/SocialButton/InstagramButton';
import TelegramButton from '../Button/SocialButton/TelegramButton';
import FacebookButton from '../Button/SocialButton/FacebookButton';





const SocialMediaLink = ({ig, tg, fb}) => {
  return (
    <div className={styles.root}>
        <InstagramButton nickname={ig}/>
        <FacebookButton nickname={fb} />

    </div>
  );
};

export default SocialMediaLink
