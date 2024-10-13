import Link from 'next/link';
import React from 'react';

const GoogleMapsLink = ({start, end}) => {


    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${start.latitude},${start.longitude}&destination=${end.latitude},${end.longitude}`;


    return (
           <Link href={googleMapsUrl} target='_blank' rel="noopener noreferrer" >
                Побудуйте швидкий маршрут через Google Maps ...  📍🗺 
           </Link>
  );
};

export default GoogleMapsLink;