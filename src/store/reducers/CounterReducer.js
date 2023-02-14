import {INCREMENT, DECREMENT} from "../actions/CounterActions";
const initialState = {
    count: 0,
}

export default function CounterReducer(state= initialState, actions) {
    console.log(actions.type);
    switch (actions.type) {
        case INCREMENT:{
            console.log(actions.payload);
            let count = state.count;
            count = count + actions.payload;
         return {
             ...state,
             count
         }
        }

        case DECREMENT:{
            console.log(actions.payload);

            let count = state.count;
            count = count - actions.payload;
         return {
             ...state,
             count
         }
        }
    
        default:
            return state
    }

}