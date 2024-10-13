"use client"

import GlobalApi from "@/app/_services/graphQL_custom/GlobalApi";
import { getServicesData } from "@/app/_services/graphQL_custom/QueryGraphQL";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
//import classNames from 'classnames';
import styles from './services-side-bar.module.scss';
import { motion } from "framer-motion";
import useIsMobile from "@/app/hooks/useIsMobile";
import useScrollConstraints from "@/app/hooks/useScrollConstraints";
import { Skeleton } from "@/components/ui/skeleton"



export default function CategorySideBar() {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const isMobile = useIsMobile();
 



    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const constraints = useScrollConstraints(containerRef, contentRef, data);

    console.log(constraints)
    
   



    useEffect(() => {
        async function fetchData() {
            try {
                const response = await GlobalApi.getServices(getServicesData);
                setData(response.servicEss); // Припустимо, що response.data містить масив даних
            } catch (error) {
                setError(error.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

   
    

    //if (loading) { return <p>Завантаження</p> ; }

    if (error) {
        return <p>Error: {error}</p>;
    }





    return (
        <div className=" relative md:fixed ">
            <h2 className={styles.h2Text}>Послуги клініки🤩:</h2>
            <div ref={containerRef} className={styles.scrollContainer}>
      <motion.div
        ref={contentRef}
        className="flex gap-2 flex-row md:flex-col"
        drag={isMobile ? "x" : false}
        
        dragConstraints={constraints}
      >




{
    data.length>0?data.map((serv, index) => (
        <Link href={`/categories/${serv.slug}`} key={index} className={styles.servicesListItem}>
            {serv.titleServicEs} 
                    </Link>
    )):[1,2,3,4,5,6].map((servScal,index)=>(<Skeleton className="w-[200px] h-[30px] rounded-full" />
    ))
} 

                   



               </motion.div>
               </div>
        </div>
    );
}
