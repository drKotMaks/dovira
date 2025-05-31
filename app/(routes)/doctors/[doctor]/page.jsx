'use client'

import styles from './doctor-page.module.scss';
import SocialMediaLink from '@/app/_components/SocialMediaLink/SocialMediaLink';
import { getAllInfoDoctor } from '@/app/_services/graphQL_custom/QueryGraphQL';
import { Separator } from "@/components/ui/separator";
import LocalItem from '@/app/_components/LocalItem/LocalItem';
import DoctorDescription from '@/app/_components/DoctorDescription/DoctorDescription';
import useDoctor from '@/app/hooks/useDoctor';
import SkeletonBlock from '@/app/_components/SkeletonCustom/SkeletonBlock';
import SkeletonText from '@/app/_components/SkeletonCustom/SkeletonText';
import FullText from '@/app/_components/FullText/FullText';
import PricesBlock from '@/app/_components/PricesBlock/PricesBlock';
import { setting } from '@/lib/setting';

const DoctorSinglePage = ({ params }) => {

  // Використовуйте правильний параметр
  const query = getAllInfoDoctor(params.doctor);
  const { doctor, isError, isLoading, prices, majors} = useDoctor(query)
 

  if (isError) return <div>Щось пішло не так...</div>;
  


  
  
  const text = doctor?.fullText?.html

  // Перевірка наявності 




  return (
    <>

    <title>{doctor?.nameDoctor + " " + doctor?.lastName + ' | '+ setting.fullTitle|| ''}</title>
    <meta name="description" content={doctor?.description || ''} />
    <meta property="og:title" content={doctor?.nameDoctor + " " + doctor?.lastName || ''} />
    <meta property="og:description" content={doctor?.description || ''} />
    <meta property="og:image" content={doctor?.image?.url || ''} />     
<meta property="og:type" content="website" />
    <meta property="og:url" content={`${setting.url}doctors/${params.doctor}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={doctor?.name || ''} />
    <meta name="twitter:description" content={doctor?.description || ''} />
    <meta name="twitter:image" content={doctor?.image?.url || ''} />
    <link rel="canonical" href={`${setting.url}doctors/${params.doctor}`} />
   
      {isLoading?(<SkeletonBlock/>):<DoctorDescription params={params.doctor} doctor={doctor} majors={majors} isLoading={isLoading} />}
      {isLoading?(<SkeletonText/>):<FullText FullText={text} isLoading={isLoading}  />}
      {isLoading?(<SkeletonText/>):<PricesBlock prices={prices} /> }
      

    </>
  );
};

export default DoctorSinglePage;