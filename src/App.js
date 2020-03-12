import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamComposition2 from './Components/teamComposition';
import TeamComposition from './Components/teamCompositionPrueba';
import NotFound from './Components/notFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={TeamComposition}/>
        <Route exact path='/asd' component={TeamComposition2}/>
        <Route exact path='*' component={NotFound}/>
      </Switch>
    </Router>
  )  
}

export default App;
