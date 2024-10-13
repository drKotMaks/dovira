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

const DoctorSinglePage = ({ params }) => {

  // Використовуйте правильний параметр
  const query = getAllInfoDoctor(params.doctor);
  const { doctor, isError, isLoading, prices, majors} = useDoctor(query)
 

  if (isError) return <div>Щось пішло не так...</div>;
  

  console.log(doctor)
  console.log(prices)
  
  
  const text = doctor?.fullText?.html
  console.log(params.doctor)
  // Перевірка наявності 




  return (
    <>
      {isLoading?(<SkeletonBlock/>):<DoctorDescription params={params.doctor} doctor={doctor} majors={majors} isLoading={isLoading} />}
      {isLoading?(<SkeletonText/>):<FullText FullText={text} isLoading={isLoading}  />}
      {isLoading?(<SkeletonText/>):<PricesBlock prices={prices} /> }
      

    </>
  );
};

export default DoctorSinglePage;