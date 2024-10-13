import {FacebookIcon} from '@/public/svgs';
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

const FacebookButton = ({nickname, avatarUrl}) => {
 return (
    <HoverCard>
        <HoverCardTrigger>
            <Link href={`https://facebook.com/${nickname}`} className="flex">
                <FacebookIcon/>
            </Link>  
        </HoverCardTrigger>
        <HoverCardContent className="flex gap-4 ">
            <Avatar>
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>FB</AvatarFallback>
            </Avatar>
            <div className='block'>Мій facebook <span className='font-bold'>@{nickname}</span></div>
        </HoverCardContent>

    </HoverCard>
  );
};

export default FacebookButton;