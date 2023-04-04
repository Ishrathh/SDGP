import { error } from "console";

const fetchData = async({url, methods='POST', token='', body=null}, dispatch)=>{
    const Headers = token
    ? {'content-Type':'application', authorization:'Bearer ${token}'}
    :{'content-Type': 'application'};
    body=body ? {body:JSON.stringify(body)} : {}
    try{
        const responce = await fetch(url, {methods,headers,...body})
        const data = await response.jason()
        if(!data.success){
            if(response.status ==401) dispatch({type:'UPDATE_USER', payload:null})
            throw new Error(data.message)
        }
        return data.result
    }catch (error){
        dispatch({type:'UPDATE_ALERT', payload:{open:true, severity:'error',message:error.message}})
        console.log(error)
        return null;


    }

    };
    export default fetchData;
