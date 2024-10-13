import useSWR from "swr";
import { fetcher } from "../_services/fetcher";

export default function useServices(query) {
  if (!query) {
    return {
      service: null,
      isError: null,
      isLoading: false,
      doctors: null,
      prices: null,
      fulltext: null,
      countPrice: null
    };
  }

  const { data, error, isLoading } = useSWR(query, fetcher);

  // Логування лише в режимі розробки
  if (process.env.NODE_ENV === "development") {
    console.log(data);
  }



  return {
    service: data?.servicEss?.[0] || [],
    imageArray: data?.servicEss?.[0]?.multiImageServices?.map(image => image.url) || [],
    isError: !!error,
    isLoading,
    doctors: data?.servicEss?.[0]?.doctord_ || [],
    prices: data?.servicEss?.[0]?.pricE || [],
    fulltext: data?.fullDescription?.html || '',
    countPrice: data?.servicEss?.[0]?.pricE.length
    
  };
}

