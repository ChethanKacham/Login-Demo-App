import './App.css';
import Form from './components/Form'
import Nav from './components/Nav'
import GetDetails from './components/GetDetails'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

  function App() {
  return (
    <Router>
    <div className="App">
        <Nav></Nav>
        <h1>Submission of Form</h1>
        <Switch>
        <Route path="/" exact component={Form}></Route>
        <Route path="/home" exact component={Form}></Route>
        <Route path="/details" exact component={GetDetails}></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
