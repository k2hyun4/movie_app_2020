import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
  //exact true 가 없으면 break되지 않고 chaining됨
  return <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={ Home }/>
      <Route path="/about" component={ About }/>
    </HashRouter>
}

export default App;