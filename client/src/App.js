import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
