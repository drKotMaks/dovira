import { getAllInfoServices } from '@/app/_services/graphQL_custom/QueryGraphQL';
import { fetcher } from '@/app/_services/fetcher';
import { setting } from '@/lib/setting';
import TitleH1 from '@/app/_components/Typography/TitleH1';
import { Separator } from "@/components/ui/separator";
import {DescriptionBlock} from '../_components/DescriptionBlock/DescriptionBlock';
import GalleryServices from '../_components/GalleryServices/GalleryServices';
import FullText from '@/app/_components/FullText/FullText';
import dynamic from 'next/dynamic';
//import GetPriceForCategory from '@/app/_components/GetPriceForCategory/GetPriceForCategory';

// Динамічний імпорт клієнтських компонентів
 const DoctorItemServices = dynamic(() => import('@/app/_components/DoctorItemServices/DoctorItemsServices'), { ssr: false });
//const GetPriceForCategory = dynamic(() => import('@/app/_components/PricesBlock/PricesBlockClient'), { ssr: false });
const GetPriceForCategory = dynamic(() => import('@/app/_components/GetPriceForCategory/GetPriceForCategory'), { ssr: false });

export async function generateMetadata({ params }) {
  const query = getAllInfoServices(params.category);
  const data = await fetcher(query);
  const service = data?.servicEss?.[0];

  const descr = service?.fullDescription?.html
    ? (service.fullDescription.html.length > 150
        ? service.fullDescription.html.slice(0, 150).trim() + '...'
        : service.fullDescription.html)
    : '';

  return {
    title: `${service?.titleServicEs ?? ''} | ${setting.fullTitle}`,
    description: descr,
    openGraph: {
      title: service?.titleServicEs ?? '',
      description: descr,
      images: [service?.imageServices?.url ?? ''],
      url: `${setting.url}${params.category}`,
      type: 'website',
    },
    alternates: {
      canonical: `${setting.url}${params.category}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const query = getAllInfoServices(params.category);
  const data = await fetcher(query);
  const service = data?.servicEss?.[0];

  if (!service) return <div>Послуга не знайдена</div>;

  const text = service.fullDescription?.html || '';
  const imageArray = service.multiImageServices?.map(img => img.url) || [];
// console.log(params.category)
  return (
    <div className="flex flex-col gap-6">
      <TitleH1 text={service.titleServicEs} />
      <Separator />
      <DescriptionBlock
        title={service.titleServicEs}
        rating={service.rating}
        stage={service.stage}
        price={service.pricE}
        description={service.decriptionServicEs}
        image={service.imageServices?.url}
        updatedAt={service.updatedAt}
      />
      <Separator />
      {imageArray.length > 0 && <GalleryServices images={imageArray} />}
      <DoctorItemServices category={params.category} />
      <Separator />
      <FullText FullText={text} />
      <Separator />
      <GetPriceForCategory category={params.category} />
      
      </div>
  );
}