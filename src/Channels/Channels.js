import React from "react";
import { Link } from "react-router-dom";
import Channel from "./Channel/Channel";

class Channels extends React.Component {
  render() {
    //console.log(this.props.location.query);
    return (
      <div>
        <h3>Channels Pages</h3>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/channels/general",
                state: {
                  channel: this.props.location.query,
                  userName: this.props.location.userName
                }
              }}
            >
              general
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/channels/promo1803",
                state: {
                  channel: this.props.location.query,
                  userName: this.props.location.userName
                }
              }}
            >
              promo1803
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/channels/wtf",
                state: {
                  channel: this.props.location.query,
                  userName: this.props.location.userName
                }
              }}
            >
              wtf
            </Link>
          </li>
        </ul>
        <h1> {this.props.match.params.channel}</h1>
        {/* {console.log("this props dans channels : ", this.props)} */}
        <Channel
          channel={this.props.match.params.channel}
          socket={this.props.location.socket}
          userName={this.props.location.query}
        />
      </div>
    );
  }
}

export default Channels;
