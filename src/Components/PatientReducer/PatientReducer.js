import React, { useReducer, useRef } from 'react';
import { patientReducer, patientSate } from '../PatientReducers/PatientReducers';



const PatientReducer = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientSate);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT', 
            name: nameRef.current.value, 
            id: state.patients.length + 1
        })
        nameRef.current.value = '';
    }
    return (
        <div>
            <h1>Manage Doctor Chamber: {state.patients.length}</h1>
            <form action="" onSubmit={handleSubmit}>
                <input ref={nameRef}/>
                {/* <input type="submit" value="Submit"/> */}
            </form>
            {
                state.patients.map(pt => <li onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}>{pt.name}</li>)
            }
        </div>
    );
};

export default PatientReducer;