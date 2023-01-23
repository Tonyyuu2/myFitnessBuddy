import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
