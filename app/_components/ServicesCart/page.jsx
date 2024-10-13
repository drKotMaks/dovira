"use client"

import React from "react";
import styles from "./services-cart.module.scss"
import { Skeleton } from "@mui/material";
import SkeletonServiceItem from "../SkeletonCustom/SkeletonServiceItem";
import Link from "next/link";


export default function ServicesCart ({serv}) {



    return (
 
           
               <Link href={`/categories/${serv.slug}`} className={styles.ServicesListItem}>
                    <div className={styles.ServicesItemTitle}>
                        <div className={styles.title}>{serv.titleServicEs}</div>
                        {serv.serviceAction&&<span className={styles.lable}>{serv.serviceAction}</span>}
                    </div>
                    <div className={styles.ServicesInfoItem}>
                        <div className={styles.Reveiw}>
                            <div className={styles.ReveiwTitle}>Рейтинг:</div>
                            <div className={styles.ReviewScore}>{serv.rating}</div>
                        </div>
                        <div className={styles.Reveiw}>
                            <div className={styles.ReveiwTitle}>Кіл. послуг:</div>
                            <div className={styles.ReviewScore}>{serv.pricE.length}</div>
                        </div>
                    </div>
                </Link>
            
          );
} 