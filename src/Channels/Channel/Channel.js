import React from "react";

let messages = [];

class Channel extends React.Component {
  state = {
    message: " ",
    messages: [],
    messageUser: {},
    channel: "",
    userName: this.props.userName
  };

  socket = this.props.socket;

  componentDidMount() {
    // initChannel(this.props.channel);
    console.log("componentDidMount");
    //this.handleChat();
    this.socket.emit("channel_init", { channel: this.props.channel });
  }

  // Faire une action lors du changement de channel

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.channel !== this.props.channel) {
      //initChannel(this.props.channel);
      console.log("shouldComponentUpdate is true");
      this.socket.emit("channel_init", { channel: nextProps.channel });
      //console.log("channel choisi : ", nextProps.channel);

      return true;
    }
    //this.forceUpdate();
    console.log("shouldComponentUpdate is false");
    return false;
  }

  message = new_message => {
    console.log("message");
    this.socket.emit("new_message", new_message);
  };

  handleChange = event => {
    console.log("handleChange");
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    console.log("handleSubmit");
    this.setState(
      {
        messageUser: {
          user: this.state.userName.name,
          mess: this.state.message,
          channel: this.props.channel
        }
      },
      () => {
        this.socket.emit("new_message", this.state.messageUser);
        //this.message(this.state.messageUser);
        this.handleChat();
      }
    );

    event.preventDefault();
  };

  handleChat = () => {
    console.log("handleChat");
    this.socket.on("send_message", data => {
      console.log("handleChat dans le socket avant le for");
      messages = [];
      for (let i = 0; i < data.length; i++) {
        messages.push(data[i]);
      }

      this.setState({
        messages: messages
      });
      console.log("handleChat dans le socket apres le for ");
      // this.setState({
      //   channel: data.channel
      // });
      //this.socket.emit("channel_init", { channel: data.channel });
    });
    //this.socket.emit("channel_init", { channel: this.state.channel });
    console.log("handleChat a la fin");
  };

  render() {
    {
      console.log("rendering");
    }
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
        <div className="d-flex ">
          <ul>
            {this.state.messages.map((message, index) => {
              //console.log("render message : ", message);
              return (
                <li key={index}>
                  <div>
                    <div>{message.name}</div>
                    <div>{message.date}</div>
                    <div>{message.message}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Channel;
