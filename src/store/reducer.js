import { INCREMENT_COUNTER } from "./actionTypes";

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, counter: state.counter + action.value }
        default:
            return state;
    }
}

export default reducer;