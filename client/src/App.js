import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard:id" component={DashBoard}/>
        <Route path="/channel:id" component={Channel}/>
        <Route/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
