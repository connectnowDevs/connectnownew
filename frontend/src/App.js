import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import ConnectNow from "./Components/Connectnow/Connectnow"
import Blog from "./Components/Blog/Blog"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={ConnectNow}/>
        <Route exact path='/blog' component={Blog}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
