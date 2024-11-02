'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './local-item.module.scss';
import { PinDropIcon } from '@/public/svgs';
import GoogleMapsLink from '@/app/hooks/GoogleMapsLink';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { setting } from '@/lib/setting';

// Тепер можна продовжити з функціоналом компонента
const LocalItem = ({ latitude, longitude, isLoading }) => {
    const [startCoordinates, setStartCoordinates] = useState(null);
    const [endCoordinates, setEndCoordinates] = useState({
        latitude: latitude,
        longitude: longitude,
    });

    useEffect(() => {
        // Використання геолокації браузера для визначення координат користувача
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setStartCoordinates({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${startCoordinates?.latitude},${startCoordinates?.longitude}&destination=${endCoordinates.latitude},${endCoordinates.longitude}`;

    return (
        <div className={styles.root}>
            <HoverCard>
                <HoverCardTrigger className="flex gap-4 cursor-pointer">
                    <div className={styles.icon}>
                        <PinDropIcon />
                    </div>
                    <div className={classNames(styles.adresFull, styles.div3, styles.div4)}>
                        <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            {setting.adress}
                        </Link>
                    </div>
                </HoverCardTrigger>

                <HoverCardContent>
                    {startCoordinates && (
                        <GoogleMapsLink start={startCoordinates} end={endCoordinates} />
                    )}
                </HoverCardContent>
            </HoverCard>
        </div>
    );
};

export default LocalItem;
