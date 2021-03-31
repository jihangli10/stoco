import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import DataSelector from './DataSelector.jsx';
import Result from './Result.jsx';

const App = () => (
  <div className="App">
  <header>
    <h2>stoco</h2>
  </header>

  <Router>
    <Switch>
      <Route exact path="/" component={DataSelector} />
      <Route path="/abc" component={Result}/>
    </Switch>
  </Router>
  </div>
);

export default App;
