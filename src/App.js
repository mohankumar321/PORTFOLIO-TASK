
import { Route, Switch } from 'react-router-dom';
import './App.css';


import WelcomePage from './Compenent/Welcome';
import IntroPage from './Compenent/Intro';
import ProjectPage from './Compenent/Project';
import ResumePage from './Compenent/resume';
import ContactPage from './Compenent/details';
import Skillpage from './Compenent/skils';





function App() {
  return (
    <div className="App">
     
<Switch>
  <Route exact path="/"><WelcomePage/></Route>
  <Route path="/aboutme"><IntroPage/></Route>
  <Route path="/Projects"><ProjectPage/></Route>
  <Route path="/resume"><ResumePage/></Route>
  <Route path="/skills"><Skillpage/></Route>
  <Route path="/contact"><ContactPage/></Route>
</Switch>
    </div>
  );
}

export default App;
