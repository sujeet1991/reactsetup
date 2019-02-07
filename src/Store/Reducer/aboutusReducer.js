import {Fetch_Data} from '../Action/type';
const initialState={
    headlineData:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case Fetch_Data:
        return({
            ...state,
            headlineData:action.payload
        })
        default:
        return state
    }
}