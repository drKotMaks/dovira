"use client"

import { useEffect, useState } from "react";
import { getServicesData } from './../../_services/graphQL_custom/QueryGraphQL';
import GlobalApi from "@/app/_services/graphQL_custom/GlobalApi";
import ServicesCart from "../ServicesCart/page";
import getAllServices from "@/app/hooks/getAllServices";
import styles from "./services.module.scss"
import SkeletonServiceItem from "../SkeletonCustom/SkeletonServiceItem";
import TitleH1 from "../Typography/TitleH1";
import SkeletonBlock from "../SkeletonCustom/SkeletonBlock";


export default function Services  () {

    const {services, isLoading, countPrice} =  getAllServices();

    if(isLoading) return <SkeletonBlock/>
   

return (
        <div className="w-full"> 
               
               <TitleH1 text="Ми надаємо широкий спектр послуг"/>

               <div className={styles.ServicesList}>
                    
                     { services.map((serv) => (
                       <ServicesCart serv={serv} />
                      ))
                    }

                      
              </div>


               
              
              
        </div>

      


    );
  };