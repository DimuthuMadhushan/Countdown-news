import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Newspage from './Newspage/Newspage';
import Sports from './Components/Sports/Sports';

function App() {
  return (
    <div className="App">
      <div><Header /></div>
     <Routes>
        <Route path='/' element={<div><Homepage/></div>} />
        <Route path='/news' element={<div className='npage'><Newspage/></div>}/>
        <Route path='/sports' element={<div><Sports/></div>}/>
     </Routes>
      
      
    </div>
  );
}

export default App;
