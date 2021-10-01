import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from "./components/app/appHeader";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <AppHeader></AppHeader>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
