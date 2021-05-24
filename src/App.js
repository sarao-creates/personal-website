import HomeComponent from './components/Home';
import ProjectComponent from './components/Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeComponent/>
        </Route>
        <Route path='/projects'>
          <ProjectComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
