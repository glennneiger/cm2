import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './ChannelList.css';

class ChannelList extends Component {
  render() {
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
    <tr>
      <td>고수</td>
      <td>혼잡</td>
      <td><Button variant="primary">입장</Button></td>
    </tr>
    <tr>
      <td>중수</td>
      <td>원할</td>
      <td><Button variant="primary">입장</Button></td>
    </tr>
    <tr>
      <td>하수</td>
      <td>점검</td>
      <td><Button variant="primary">입장</Button></td>
    </tr>
    <tr>
      <td>뉴비</td>
      <td>점검</td>
      <td><Button variant="primary">입장</Button></td>
    </tr>
  </tbody>
</Table>
    );
  }
}

export default ChannelList;
