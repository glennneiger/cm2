import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { IChannelStatus } from '../../interfaces/IChannelStatus';

class Lobby extends Component<RouteComponentProps> {
  constructor( props: RouteComponentProps ) {
    super( props );

    const locationState: IChannelStatus = this.props.location.state;

    console.log( locationState );
  }

  render() {
    return (
      <>
        lobby
      </>
    );
  }
}

export default Lobby;
