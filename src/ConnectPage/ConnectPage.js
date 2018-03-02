import React from "react";
import { Link } from "react-router-dom";
import socketIO from "socket.io-client";

class ConnectPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Comment vous appelez vous</h3>
        <input type="text" placeholder="Votre nom" />
        <Link to="/channels/allchannel">
          <button>Valider</button>
        </Link>
      </div>
    );
  }
}

export default ConnectPage;
