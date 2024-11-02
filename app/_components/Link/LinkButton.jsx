import Link from 'next/link';
import React from 'react';
import { LinkArrow } from '@/public/svgs/ArraySVG';

const LinkButton = ({text, href}) => {
  return (
    <Link href={href} className="relative group inline-block w-full xs:w-auto py-4 px-6 text-orange-900 hover:text-white font-semibold bg-orange-50 rounded-md overflow-hidden transition duration-500">
    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
    <div className="relative flex items-center justify-center">
        <span className="mr-4">{text}</span>
        <span>
            <LinkArrow/>
        </span>
    </div>
</Link>
  );
};

export default LinkButton;