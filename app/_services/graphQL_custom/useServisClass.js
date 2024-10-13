import GlobalApi from "./GlobalApi";


  
export const  useDataGraph = async(arg)=> {
    try{
        const resp = await GlobalApi.getServices(arg);
        const data = await resp.servicEss;
          console.log(data)
          //takeDataGraph(data)
         return data
        
        } catch(error){
            console.error('There has been a problem with your fetch operation:', error);
        }
}


export const takeDataGraph = (arg) => {
  const  a = useDataGraph(arg)
  const b = a;
  return b


  

  
}
  
