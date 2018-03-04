import React from "react";
import socketIO from "socket.io-client";
// import Channels from "../Channels/Channels";

class ConnectPage extends React.Component {
  state = {
    userName: ""
  };

  componentDidMount() {
    this.socket = socketIO.connect("http://localhost:3000");
    console.log("Connexion au serveur");
    //this.handleChat();
  }

  handleChange = event => {
    this.setState({ userName: event.target.value });
  };

  handleSubmit = event => {
    //console.log("A name was submitted: " + this.state.userName);
    event.preventDefault();

    this.props.history.push({
      pathname: "/channels/allchannel",
      query: { name: this.state.userName },
      socket: this.socket
    });

    this.socket.emit("new_user", { userName: this.state.userName });
  };

  render() {
    //console.log("this props history : ", this.props.history);
    return (
      <div>
        <h3>Comment vous appelez vous</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Votre nom"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <button type="submit">Valider</button>
        </form>
        {/* <Channels
          userName="Hello"
          // channel={this.props.match.params.channel}
          // socket={this.props.location.socket}
          // userName={this.props.location.query}
        /> */}
      </div>
    );
  }
}

export default ConnectPage;
