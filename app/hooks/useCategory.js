import useSWR from 'swr';
import { fetcher } from '../_services/fetcher';


const useCategory = (category) => {
  const query = `
    query getCategory {
  servicEss(where: {slug: "`+category+`"}) {
    slug
    titleServicEs
    rating
    stage
    id
    pricE {
      oldCost
      titlE
      id
    }
  }
}
  `;
  
  const { data, error } = useSWR(category ? [query, { category }] : null, (query, variables) =>
    fetcher(query, variables)
  );

  return { data, error };
};

export default useCategory;
