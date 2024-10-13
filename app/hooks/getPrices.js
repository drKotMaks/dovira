

import useSWR from 'swr';
import { fetcher } from '../_services/fetcher';
import {  getPricesAll } from '../_services/graphQL_custom/QueryGraphQL';

export default function getPrices() {
  const { data, error, isLoading } = useSWR(getPricesAll, fetcher);
  return {
    prices: data?.pricEs || [],
    isError: !!error,
    isLoading,
    
  };
}
