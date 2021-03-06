import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Button, Form } from 'react-bootstrap';

class Login extends Component<RouteComponentProps> {
  onSubmit = ( e: React.MouseEvent ) => {
    e.preventDefault();

    this.props.history.push( "/channels" );
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={ this.onSubmit }>
            login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
