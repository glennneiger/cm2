import React, { Component, ComponentProps } from 'react';
// import socketIOClient from "socket.io-client";
// import * as socketIOClient from "socket.io-client";
import * as io from 'socket.io-client';

interface IState {
  color: Number
}

class ChatRoom extends Component< any, IState > {
  // endpoint: String = 'localhost:4001';

  socket = io.connect( 'localhost:4001' )

  constructor( props: any ) {
    super( props );

    this.state = {
      color: 0xffffff
    }

    // const socket = io.connect( 'localhost:4001' )

  }

  componentDidMount() {
    console.log( 'did mount' );

    this.socket.on('change color', (col: any) => {
      console.log( "GOT COLOR" );
      console.log( col );
      document.body.style.backgroundColor = col
  })
  }

  sendColor = ( color: any ) => {
    this.socket.emit('change color', color )
  }

  render() {
    return (
      <>
        chatroom
        <button onClick={ () => this.sendColor( '#0000ff' ) }>blue</button>
        <button onClick={ () => this.sendColor( '#ff0000' ) }>red</button>
      </>
    );
  }
}

export default ChatRoom;
