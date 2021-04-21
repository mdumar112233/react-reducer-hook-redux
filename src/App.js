import logo from './logo.svg';
import './App.css';
import Reducer from './Components/Reducer/Reducer';
import PatientReducer from './Components/PatientReducer/PatientReducer';

function App() {
  return (
    <div className="App">
      <Reducer></Reducer>
      <PatientReducer></PatientReducer>
    </div>
  );
}

export default App;
