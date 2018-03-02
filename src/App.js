import React from "react";
import ConnectPage from "./ConnectPage/ConnectPage";
import Channels from "./Channels/Channels";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ConnectPage} />

          <Route path="/channels/:channel" component={Channels} />
        </div>
      </Router>
    );
  }
}

export default App;
