import React from "react";
import { Link } from "react-router-dom";
import Channel from "./Channel/Channel";

class Channels extends React.Component {
  render() {
    return (
      <div>
        <h3>Channels Pages</h3>
        <ul>
          <li>
            <Link to="/channels/general">general</Link>
          </li>
          <li>
            <Link to="/channels/promo1803">promo1803</Link>
          </li>
          <li>
            <Link to="/channels/wtf">wtf</Link>
          </li>
        </ul>
        <h1> {this.props.match.params.channel}</h1>
        {console.log(this.props)}
        <Channel channel={this.props.match.params.channel} />
      </div>
    );
  }
}

export default Channels;
