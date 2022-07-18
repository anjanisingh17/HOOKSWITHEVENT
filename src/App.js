import './App.css';
import DigitalClock from './DigitalClock';
import Events from './Events';
import FormIntro from './FormIntro';
import LoginForm from './LoginForm';
import ComplexForm from './ComplexForm';

function App() {

  return(
    <>
    <DigitalClock />
    <hr />    
    <Events />
    <hr />
    <FormIntro />
    <hr />
    <LoginForm />
    <hr />
    <ComplexForm />
    </>
  );
}

export default App;
