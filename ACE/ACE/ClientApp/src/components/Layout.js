import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
          <div>
              @2021 ACE by team A 
              <p>designed by apple in california</p>
          </div>
      </div>
    );
  }
}
