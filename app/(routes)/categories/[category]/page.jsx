// app/(routes)/categories/[category]/DynamicService.jsx
'use client';

import useServices from '@/app/hooks/useServices';
import styles from './services-main-block.module.scss';
import { Separator } from "@/components/ui/separator";
import { DescriptionBlock } from '../_components/DescriptionBlock/DescriptionBlock';
import TitleH1 from '@/app/_components/Typography/TitleH1';
import { GalleryServices } from '../_components/GalleryServices/GalleryServices';
import DoctorItemsServices from '@/app/_components/DoctorItemServices/DoctorItemsServices';
import FullText from '@/app/_components/FullText/FullText';
import PriceServices from '../_components/PriceServices/PriceServices';
import SkeletonBlock from '@/app/_components/SkeletonCustom/SkeletonBlock';
import SkeletonText from '@/app/_components/SkeletonCustom/SkeletonText';
import { getAllInfoServices } from '@/app/_services/graphQL_custom/QueryGraphQL';
import { setting } from '@/lib/setting';


export default function DynamicService({ params }) {
  const query = getAllInfoServices(params.category);
  const { service, imageArray, isError, isLoading, doctors, prices } = useServices(query);

  if (isError) return <div>Щось пішло не так...</div>;
  if (!service) return <div>Послуга не знайдена</div>;

  const text = service.fullDescription?.html || '';


  function truncateText(text, maxLength = 150) {
  if (!text) return '';
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text;
}

const descr = truncateText(text)

  return (
<>
   <div>
        <title>{service.titleServicEs + 
          ' | ' + setting.fullTitle}</title>
        <meta name="description" content={descr} />
        <meta property="og:title" content={service.titleServicEs} />
        <meta property="og:description" content={descr} />
         <meta property="og:image" content={service.imageServices?.url} />
         <meta property="og:type" content="website" />
         
         <meta property="og:url" content={`${setting.url}${params.category}`} />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content={service.titleServicEs} />  

         <meta name="twitter:description" content={descr} />
         <meta name="twitter:image" content={service.imageServices?.url} />
         <link rel="canonical" href={`${setting.url}${params.category}`} />



      </div>

    <div className={styles.ServicesMainBlock}>
      <TitleH1 text={service.titleServicEs} />
      <Separator />
      {isLoading ? (
        <SkeletonBlock />
      ) : (
        <DescriptionBlock
          title={service.titleServicEs}
          rating={service.rating}
          stage={service.stage}
          price={service.pricE}
          description={service.decriptionServicEs}
          image={service.imageServices?.url}
          updatedAt={service.updatedAt}
        />
      )}
      <Separator />
      {imageArray.length > 0 && <GalleryServices images={imageArray} isLoading={isLoading} />}
      <Separator />
      <DoctorItemsServices doctors={doctors} />
      {isLoading ? <SkeletonText /> : <FullText FullText={text} />}
      <Separator />
      {isLoading ? <SkeletonText /> : <PriceServices prices={prices} />}
    </div>

    </>
  );
}

