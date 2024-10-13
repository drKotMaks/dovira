import { gql, request } from "graphql-request";
///import {getServicesData}  from './QueryGraphQL';



const MASTER_URL='https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clx01r83d02vi07ulcmj2srvc/master'

const getServices =async(arg)=>{

    const query=gql ``+arg+``
    

const result = await request(MASTER_URL, query)
return result
}

export default {
    getServices
}