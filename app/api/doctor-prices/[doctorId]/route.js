import { getAllInfoDoctor } from '@/app/_services/graphQL_custom/QueryGraphQL';
import { fetcher } from '@/app/_services/fetcher';

export async function GET(request, { params }) {
  const query = getAllInfoDoctor(params.doctorId);
  const data = await fetcher(query);
  const doctor = data?.doctoRs?.[0];
  return Response.json({ pricEsDoc: doctor?.pricEsDoc || [] });
}