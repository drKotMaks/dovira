import useSWR from "swr";
import { fetcher } from "../_services/fetcher";

export default function useDoctor (query) {
    const {data, error, isLoading} = useSWR(query, fetcher)

    const text = data?.fullText?.html || '';

    return {
        doctor: data?.doctoRs?.[0],
        isError: error,
        isLoading,
        text,
        prices: data?.doctoRs?.[0].pricEsDoc || [],
        majors: data?.doctoRs?.[0].majorSpecialy || [],
        }
}