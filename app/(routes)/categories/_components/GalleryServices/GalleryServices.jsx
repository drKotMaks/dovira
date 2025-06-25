"use client"

import Image from 'next/image';
import styles from './gallery-services.module.scss';
import { useRef } from "react";
import { motion } from "framer-motion";
import useScrollConstraints from "@/app/hooks/useScrollConstraints";
import { Skeleton } from '@/components/ui/skeleton';
export const GalleryServices = ({ images, isLoading }) => {

    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const data = [1, 2, 3];
    const constraints = useScrollConstraints(containerRef, contentRef, data);
    

    return (
        <div>
            <div ref={containerRef} className={styles.GalleryServices}>

                <motion.div className={styles.PhotoGallery}
                    ref={contentRef} 
                    drag="x"
                    dragConstraints={constraints}>

                    {isLoading ? (
                        data.map((_, index) => (
                            <Skeleton key={index} className="h-[200px] w-[200px]" />
                        ))
                    ) : (
                        images.map((image, index) => (
                            <Image
                                key={index}
                                alt={`Service Image ${index + 1}`}
                                src={image}
                                className={styles.ItemGalleryServices}
                                width={700}
                                height={500}
                                draggable="false"
                            />
                        ))
                    )}
                </motion.div>
            </div>
        </div>
    )
}
