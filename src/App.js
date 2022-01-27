import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
// import Main from "./components/Main";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Stock from "./pages/Stock";
import data from './data'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route
          path="/stocks/:symbol"
          render={(props) => <Stock data={data} {...props} />}
        />

        <Route
          path="/stocks"
          render={(props) => <Dashboard {...props} data={data} />}
        />
      </Switch>
    </div>
  );
}

export default App;
