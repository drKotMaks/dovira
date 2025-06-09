'use client';
import PricesBlock from './PricesBlock';
import SkeletonBlock from '../SkeletonCustom/SkeletonBlock';
import useDoctor from '@/app/hooks/useDoctor';
import { getAllInfoDoctor } from '@/app/_services/graphQL_custom/QueryGraphQL';

export default function PricesBlockClient({ doctorId }) {
  const query = getAllInfoDoctor(doctorId);
  const { isError, isLoading, prices } = useDoctor(query);

  if (isLoading) return <SkeletonBlock />;
  if (isError) return <div>Помилка завантаження цін</div>;
  return <PricesBlock prices={prices} />;
}