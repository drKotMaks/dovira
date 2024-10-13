import useSWR from "swr";
import { fetcher } from "../_services/fetcher";
import { getServicesData } from "../_services/graphQL_custom/QueryGraphQL";

export default function getAllServices() {
    const { data, error, isLoading } = useSWR(getServicesData, fetcher);
    console.log(data)
    return {
        services: data?.servicEss || [],
        isError: !!error,
        isLoading,
        countPrice: data?.servicEss?.pricE?.[0].length
    };
}
