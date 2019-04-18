import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { IChannelStatus } from '../../interfaces/IChannelStatus';
import ChatRoom from './chatRoom/ChatRoom';

class Lobby extends Component<RouteComponentProps> {
  constructor( props: RouteComponentProps ) {
    super( props );

    const locationState: IChannelStatus = this.props.location.state;

    console.log( locationState );
  }

  render() {
    return (
      <div>
        Lobby
        <ChatRoom />
      </div>
    );
  }
}

export default Lobby;
