import React, { useReducer } from 'react';

const initialSate = {count: 0}

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1}
            break;   
        case 'DECREMENT':
            return {count: state.count -1}
            break;
        default:
            return state;     
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialSate);
    return (
        <div>
            <h2>This is reducer count: {state.count}</h2>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>decrement</button>
        </div>
    );
};

export default Reducer;