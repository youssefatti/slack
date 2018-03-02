import React from "react";
import socketIO from "socket.io-client";

class Channel extends React.Component {
  state = {
    message: " ",
    messages: []
  };

  componentDidMount() {
    this.socket = socketIO.connect("http://localhost:3000");
    console.log("Connexion au serveur");
    this.handleChat();
  }

  message = new_message => {
    this.socket.emit("new_message", { message: new_message });
    console.log("affichage du message envoyé : ", new_message);
    this.handleChat();
  };

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    this.message(this.state.message);

    event.preventDefault();
  };
  handleChat = () => {
    this.socket.on("send_message", data => {
      console.log("data : ", data);

      this.setState(
        {
          messages: data
        },
        () => {
          console.log(
            "state messages dans new messages : ",
            this.state.messages
          );
        }
      );
      console.log("message recu par tout le monde : ", data);
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Valider</button>
        </form>
        <h1>{this.props.channel}</h1>
        <div>
          <ul>
            {this.state.messages.map((message, index) => {
              console.log("state messages : ", this.state.messages);
              console.log("vérif des messages : ", message);
              return <li key={index}>{message}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Channel;
