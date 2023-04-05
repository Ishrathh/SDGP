// ,dispatch
const fetchData = async({url, methods='POST', token='', body=null})=>{
    const headers = token
    ? {'Content-Type':'application/json', authorization:'Bearer ${token}'}
    :{'Content-Type': 'application/json'};
    body=body ? {body:JSON.stringify(body)} : {}
    try{
        const response = await fetch(url, {methods, headers, ...body})
        const data = await response.json()
        if(!data.success){
            if(response.status == 401) //dispatch({type:'UPDATE_USER', payload:null})
            throw new Error(data.message)
        }
        return data.result
    }catch (error){
        /*dispatch({
            type:'UPDATE_ALERT', 
            payload:{
                open:true, 
                severity:'error',
                message:error.message}
        });*/
        console.log(error)
        return null;
    }

};

export default fetchData;