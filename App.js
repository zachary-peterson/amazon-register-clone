import './App.css';
import { Route, Switch } from 'react-router';
import { Landing } from './components/pages/Landing/Landing';
import { Dashboard } from './components/pages/Dashboard/Dashboard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/SignIn" component={Dashboard} />
    </Switch>
  );
}

export default App;
