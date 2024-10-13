import useSWR from 'swr';
import { fetcher } from '../_services/fetcher';
import { getDoctorsQuery } from '../_services/graphQL_custom/QueryGraphQL';

export default function useDoctors() {
  const { data, error, isLoading } = useSWR(getDoctorsQuery, fetcher);
  return {
    doctors: data?.doctoRs || [],
    isError: !!error,
    isLoading,
    majors: data?.doctoRs?.flatMap(doctor => doctor.majorSpecialy) || [],
  };
}
