import { count } from "console"
import fetchData from "./fetchData"

const url = process.env.REACT.APP.SERVER.URL + '/user'
export const login=async(user,dispatch)=>{
    //send reuest with fetch
    dispatch({type:'START_LOADING'})
    const result= await fetchData({url:url+'/login', body:user}, dispatch)
    if(result){
        dispatch({type:'UPDATE_USER', payload:result})
        dispatch({type:'CLOSE_LOGIN'})
        
    }
    dispatch({type:'END_LOADING'});

};