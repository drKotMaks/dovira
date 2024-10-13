'use client'

import styles from './services-main-block.module.scss';
import { Separator } from "@/components/ui/separator";
import { DescriptionBlock } from '../_components/DescriptionBlock/DescriptionBlock';
import TitleH1 from '@/app/_components/Typography/TitleH1';
import { GalleryServices } from '../_components/GalleryServices/GalleryServices';
import DoctorItemsServices from '@/app/_components/DoctorItemServices/DoctorItemsServices';
import FullText from '@/app/_components/FullText/FullText';
import PriceServices from '../_components/PriceServices/PriceServices';
import { getAllInfoServices } from '@/app/_services/graphQL_custom/QueryGraphQL';
import useServices from '@/app/hooks/useServices';
import SkeletonBlock from '@/app/_components/SkeletonCustom/SkeletonBlock';
import SkeletonText from '@/app/_components/SkeletonCustom/SkeletonText';

function CategoryBy({ params }) {
   const query = getAllInfoServices(params.category);
   const { service, imageArray, isError, isLoading, doctors, prices, fulltext, countPrice } = useServices(query);

  
   if (isError) return <div>Щось пішло не так...</div>;
   if (!service) return <div>Послуга не знайдена</div>;

  
   // Логування лише в режимі розробки
    if (process.env.NODE_ENV === "development") {
      console.log(prices);
      console.log(doctors);
      console.log(service.fullDescription?.html);
      console.log('Service Title:', service.titleServicEs);
      
       console.log(prices);
    }
   
    const text = service.fullDescription?.html || '';
    
    console.log(prices.length);


   return (
      <div className={styles.ServicesMainBlock}>
         <TitleH1 text={service.titleServicEs} />
         <Separator />
         {isLoading?<SkeletonBlock/>:(<DescriptionBlock 
                title={service.titleServicEs} 
                rating={service.rating} 
                stage={service.stage} 
                price={service.pricE} 
                description={service.decriptionServicEs} 
                image={service.imageServices?.url} // Передача URL зображення
                updatedAt={service.updatedAt}
            />)}
        <Separator />
        {imageArray.length>0&& <GalleryServices images={imageArray} isLoading={isLoading} />}
       
        <Separator />
        <DoctorItemsServices doctors={doctors} />
        {isLoading?<SkeletonText/>:<FullText FullText={text} />}
        <Separator />
        {isLoading?<SkeletonText/>:<PriceServices prices={prices}/>}

         {/* Додаткові компоненти можна додати тут */}
      </div>
   );
}

export default CategoryBy;
