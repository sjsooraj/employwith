import logo from './logo.svg';
import './App.css';
import { BrowserRouter,   Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Empform from './components/Empform';



function App() {
  return (
  
       
    <BrowserRouter>
    <Routes>
      
      
      <Route path='/'exact element={<Dashboard/>}/>
      <Route path='/form'exact element={<Empform/>}/>
      
    </Routes>
    </BrowserRouter>
  
  
    
  );
}

export default App;
