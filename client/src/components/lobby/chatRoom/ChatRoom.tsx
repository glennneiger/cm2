import React, { Component, RefObject } from 'react';
import * as io from 'socket.io-client';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './ChatRoom.css'
import ChatEvent from './ChatEvent';

interface IChatMsg {
  text: string,
  isMyChat: boolean,
  isNotice: boolean
}

interface IState {
  chatList: Array<IChatMsg>
}

class ChatRoom extends Component< any, IState > {
  endpoint: string = 'localhost:4001';

  socket: SocketIOClient.Socket;
  refForm: RefObject<any>;
  
  constructor( props: any ) {
    super( props );

    this.socket = io.connect( this.endpoint );
    this.refForm = React.createRef();

    this.state = {
      chatList: []
    }
  }

  componentDidMount() {
    this.addSocketEvent();
  }

  addSocketEvent = () => {
    this.socket.on( ChatEvent.GUEST_CONNECTED, ( msg: string ) => {
      const chat: IChatMsg = {
        text: msg,
        isMyChat: false,
        isNotice: true
      }

      this.addChat( chat );
    } );

    this.socket.on( ChatEvent.GUEST_DISCONNECTED, ( msg: string ) => {
      const chat: IChatMsg = {
        text: msg,
        isMyChat: false,
        isNotice: true
      }

      this.addChat( chat );
    } );

    this.socket.on( ChatEvent.MY_MESSAGE_FROM_SERVER, ( msg: string ) => {
      const chat: IChatMsg = {
        text: msg,
        isMyChat: true,
        isNotice: false
      }

      this.addChat( chat );
    } );

    this.socket.on( ChatEvent.OTHERS_MESSAGE_FROM_SERVER, ( msg: string ) => {
      const chat: IChatMsg = {
        text: msg,
        isMyChat: false,
        isNotice: false
      }

      this.addChat( chat );
    } );
  }

  addChat = ( chat: IChatMsg ) => {
    const arrOld: Array<IChatMsg> = this.state.chatList;

    this.setState( {
      chatList: arrOld.concat( chat )
    } );
  }

  onClickSend = () => {
    const currentText: string = this.refForm.current.value;

    this.socket.emit( ChatEvent.MESSAGE_FROM_CLIENT, currentText );

    this.refForm.current.value = '';
  }

  renderChatItem = ( chatMsg: IChatMsg, index: number ) => {
    var clsName: string;

    if( chatMsg.isNotice ) {
      clsName = 'liConnected';
    } else {
      clsName = chatMsg.isMyChat ? 'liMe' : 'liOthers';
    }

    return (
      <li key={ index } className={ clsName }>
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
            placeholder="Chat" ref={ this.refForm }
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={ this.onClickSend }>Send</Button>
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
