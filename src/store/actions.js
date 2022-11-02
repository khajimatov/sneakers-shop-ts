import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actionTypes"

export const incrementCounter = (value) => {
    return { type: INCREMENT_COUNTER, value: value };
}
export const decrementCounter = () => {
    return { type: DECREMENT_COUNTER };
}