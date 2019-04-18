import React, { Component, ComponentProps } from 'react';
// import socketIOClient from "socket.io-client";
// import * as socketIOClient from "socket.io-client";
import * as io from 'socket.io-client';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

interface IChatMsg {
  text: String,
  isBroadcast: Boolean
}

interface IState {
  color: Number,
  chatList: Array<IChatMsg>
}

class ChatRoom extends Component< any, IState > {
  // endpoint: String = 'localhost:4001';
  socket = io.connect( 'localhost:4001' )

  constructor( props: any ) {
    super( props );

    this.state = {
      color: 0xffffff,
      chatList: [ 
        {
          text: 'test',
          isBroadcast: true
        },
        {
          text: 'test222',
          isBroadcast: false
        },
      ]
    }
  }

  componentDidMount() {
    console.log( 'did mount' );

    this.socket.on('change color', (col: any) => {
      console.log( "GOT COLOR" );
      console.log( col );
      document.body.style.backgroundColor = col
    });

    this.socket.on('GUEST_CONNECTED', (col: any) => {
      console.log( "GUEST_CONNECTED" );
    });
  }

  sendColor = ( color: any ) => {
    this.socket.emit('change color', color )
  }

  renderChatItem = ( chatMsg: IChatMsg, index: number ) => {
    return (
      <li key={ index }>
        { chatMsg.text }
      </li>
    );
  }

  render() {
    const chatList = this.state.chatList;

    return (
      <div>
        <InputGroup className="mb-3" id='igChat'>
          <FormControl
            placeholder="Chat"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
        <ul>
          { chatList.map( this.renderChatItem ) }
        </ul>
      </div>
    );
  }
}

export default ChatRoom;
