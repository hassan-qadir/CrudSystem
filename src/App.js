import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';

function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Form' element={<Form/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
