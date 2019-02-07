import {Fetch_Data} from './type';
import axios from 'axios';

export  const Fetch_Api=()=>{
    return (dispatch)=>{
        return axios.get('https://newsapi.org/v2/everything??country=us&q=bitcoin&apiKey=c3a13df423c64d709f79bf859979def8')
        .then(function (response) {
          dispatch(getdataHeadline(response.data))
        })
        .catch(function (error) {
          console.log(error);
        });
    }

}
export const getdataHeadline=(data)=>{
    return {
        type:Fetch_Data,
        payload:data
    }

}