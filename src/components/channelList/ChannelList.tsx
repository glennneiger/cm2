import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import './ChannelList.css';

interface IChannelStatus {
  id: Number,
  title: String,
  traffic: String
}

interface IState {
  channelStatusList: Array<IChannelStatus>
}

class ChannelList extends Component<RouteComponentProps, IState> {
  constructor( props: RouteComponentProps  ) {
    super( props );

    this.state = {
      channelStatusList: []
    }

    this.getData();
  }

  getData = () => {
    const TEMP_URL: string = 'https://my-json-server.typicode.com/justinaus/cm2/channels';

    fetch( TEMP_URL )
    .then( ( response ) => {
      return response.json();
    } ).then( ( data ) => {
      this.setState( {
        channelStatusList: data
      } );
    } ).catch( ( error ) => {
      console.log( error );
    } );
  }

  onClickItem = ( channelStatus: IChannelStatus ) => {
    console.log( channelStatus );

    this.props.history.push( '/lobby' );
  }

  renderChannelItem = ( channelStatus: IChannelStatus ) => {
    return (
      <tr key={ String( channelStatus.id ) }>
        <td>{ channelStatus.title }</td>
        <td>{ channelStatus.traffic }</td>
        <td><Button variant="primary" onClick={ () => this.onClickItem( channelStatus ) }>입장</Button></td>
      </tr>
    );
  }
  
  render() {
    const channelStatusList = this.state.channelStatusList;

    return (
      <Table hover size="sm">
        <thead>
          <tr>
            <th>채널</th>
            <th>혼잡도</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { channelStatusList.map( this.renderChannelItem ) }
        </tbody>
      </Table>
    );
  }
}

export default ChannelList;
