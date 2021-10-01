import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import { Link } from "react-router-dom";
import HouseDetailsPage from "./pages/HouseDetailsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/house/:id" component={HouseDetailsPage} />
        <Route path="/details/:id" component={CharacterDetailsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
