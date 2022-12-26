// import HomeComponent from './components/Home';
// import ProjectComponent from './components/Projects';
// import WritingComponent from './components/Writing';
// import MoreComponent from './components/More';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import {lazy, Suspense} from 'react';

const HomeComponent = lazy(() => import('./components/Home'))
const ProjectComponent = lazy(() => import('./components/Projects'))
const WritingComponent = lazy(() => import('./components/Writing'))
const MoreComponent = lazy(() => import('./components/More'))

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
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
    </Suspense>
  );
}

export default App;
