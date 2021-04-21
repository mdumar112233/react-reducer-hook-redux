import React, { useReducer } from 'react';
import { patientReducer, patientSate } from '../PatientReducers/PatientReducers';



const PatientReducer = () => {
    const [state, dispatch] = useReducer(patientReducer, patientSate);
    return (
        <div>
            <h1>Manage Doctor Chamber: {state.patients.length}</h1>
            <form action="">
                <input type="text"/>
            </form>
        </div>
    );
};

export default PatientReducer;