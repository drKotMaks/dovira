'use client';
import PricesBlock from '../PricesBlock/PricesBlock';
import SkeletonBlock from '../SkeletonCustom/SkeletonBlock';
//import useDoctor from '@/app/hooks/useDoctor';

import { getAllInfoServices, getPriceForCategory } from '@/app/_services/graphQL_custom/QueryGraphQL';
import useServices from '@/app/hooks/useServices';

export default function GetPriceForCategory({ category }) {
  const query = getAllInfoServices (category);
  const { isError, isLoading, prices } = useServices(query);

  if (isLoading) return <SkeletonBlock />;
  if (isError) return <div>Помилка завантаження цін</div>;
  return <PricesBlock prices={prices} />;
}