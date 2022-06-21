import { ActionTypes } from "../constants/action-types";

const initialState = {
    id: 1,
    name: "Garima",
    category : "programmer"
}
export const productReducer = (state=initialState, {type, payload}) =>{
    switch(state){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default: 
            return state;
    }

}