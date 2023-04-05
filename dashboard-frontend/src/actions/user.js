import fetchData from "./utils/fetchData"

const url = 'https://localhost:5000/user';

export const register = async (user) => {
    //send reuest with fetch
    //dispatch({ type: 'START_LOADING' })

    const result= await fetchData(
        { url: url + '/register', body:user}, 
        //dispatch
    );
    if(result){
        //dispatch({type:'UPDATE_USER', payload:result});
        //dispatch({type:'CLOSE_LOGIN'});
        /*dispatch({
            type: 'UPDATE_ALERT', 
            payload:{
                open:true, 
                severity:'success', 
                message:'Your account has been created successfully'
            },
        });*/
    }
    //dispatch({ type: 'END_LOADING' });
};

export const login = async (user) => {
    //send request with fetch
    //dispatch({ type: 'START_LOADING' })

    const result= await fetchData(
        { url: url + '/login', body:user}, 
        //dispatch
    );
    if(result){
        console.log(result);
        //dispatch({type:'UPDATE_USER', payload:result});
        //dispatch({type:'CLOSE_LOGIN'});
    }
    //dispatch({ type: 'END_LOADING' });
};