import './App.css';
import DigitalClock from './DigitalClock';
import Events from './Events';
import FormIntro from './FormIntro';
import LoginForm from './LoginForm';
import ComplexForm from './ComplexForm';
import ToDoList from './ToDoList';
import MaterialUI from './MaterialUI';
import Accordian from './Accordian/Accordian';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CovidTracker from './CovidTracker';
import ImageSearchFilter from './ImageSearchFilter';

function App() {

  return(
    <>
    <Menu />
     <Routes>
     <Route path='/' element={<DigitalClock />} />
     <Route exact path='/HOOKSWITHEVENT/' element={<DigitalClock />} />
      <Route path='https://anjanisingh953.github.io/HOOKSWITHEVENT/' element={<Events />} />
      <Route path='/formintro' element={<FormIntro />} />
      <Route path='/loginform' element={<LoginForm />} />
      <Route path='/complexform' element={<ComplexForm />} />
      <Route path='/todolist' element={<ToDoList />} />
      <Route path='/materialui' element={<MaterialUI />} />
      <Route path='/accordian' element={<Accordian />} />    
      <Route path='/covidtracker' element={<CovidTracker />} />  
      <Route path='/imageSearchfilter' element={<ImageSearchFilter />} />  

        
     </Routes>
    </>

  );
}

export default App;
