import HomeComponent from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Route path='/' component={HomeComponent} />
    </Router>
  );
}

export default App;
