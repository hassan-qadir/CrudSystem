import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import Alldata from './Components/Alldata';
import DataView from './Components/DataView';
import EditForm from './Components/EditForm';

function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Form' element={<Form/>}/>
    <Route path='/Alldata' element={<Alldata/>}/>
    <Route path='/DataView' element={<DataView/>}/>
    <Route path='/Edit/:id' element={<EditForm/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
