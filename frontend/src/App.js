import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import ConnectNow from "./Components/Connectnow/Connectnow"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={ConnectNow}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
