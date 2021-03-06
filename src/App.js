import HomeComponent from './components/Home';
import ProjectComponent from './components/Projects';
import WritingComponent from './components/Writing';
import MoreComponent from './components/More';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <HomeComponent/>
        </Route>
        <Route path='/projects'>
          <ProjectComponent />
        </Route>
        <Route path='/writing'>
          <WritingComponent />
        </Route>
        <Route path='/more'>
          <MoreComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
