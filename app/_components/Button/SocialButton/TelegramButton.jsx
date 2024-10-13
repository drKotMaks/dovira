import { InstagramIcon, TelegramIcon, FacebookIcon} from '@/public/svgs';
import React from 'react';
import classNames from 'classnames';
//import styles from './social-media-link.module.scss';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TelegramButton = ({nickname, avatarUrl}) => {
 return (
    <HoverCard>
        <HoverCardTrigger>
            <Link href={`https://t.me/${nickname}`} className="flex">
            <TelegramIcon/>
            </Link>  
        </HoverCardTrigger>
        <HoverCardContent className="flex gap-4 ">
            <Avatar>
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>TG</AvatarFallback>
            </Avatar>
            <div className='block'>Мій telegram <span className='font-bold'>@{nickname}</span></div>
        </HoverCardContent>

    </HoverCard>
  );
};

export default TelegramButton;