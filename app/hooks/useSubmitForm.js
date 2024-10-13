import useSWRMutation from "swr/mutation";
import { submitMutation } from "../_services/graphQL_custom/MutationGraphQL";
import { fetcher } from "../_services/fetcher";


export const useSubmitForm = () => {
    const { trigger, isMutating } = useSWRMutation(submitMutation, async (query, { arg }) => {
        const variables = {
            service: arg.service,
            doctor: arg.doctor,
            email: arg.email,
        };

        return await fetcher(query, variables);
    });

    return { trigger, isMutating };
};
