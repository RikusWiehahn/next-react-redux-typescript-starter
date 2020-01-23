import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { Menu } from 'react-feather';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Container,
  NavbarBrand,
  Button
} from 'reactstrap';
import { WithRouterProps } from 'next/dist/client/with-router';
import { routes } from '../../config/_routes';
import { connect } from 'react-redux';
import { StoreState } from '../../config/ReduxStore';

interface NavBarProps extends WithRouterProps, StoreState {}

interface NavBarState {
  isOpen: boolean;
}

class _NavBar extends Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  _toggleNavBar = (): void => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  _navigateToHome = (): void => {
    this.setState({ isOpen: false });
    this.props.router.push(routes.HOME);
  };
  _navigateToOrders = (): void => {
    this.setState({ isOpen: false });
    this.props.router.push(routes.ORDERS);
  };
  _navigateToForms = (): void => {
    this.setState({ isOpen: false });
    this.props.router.push(routes.FORMS);
  };
  _navigateToProfile = (): void => {
    this.setState({ isOpen: false });
    this.props.router.push(routes.PROFILE);
  };

  renderNavItems = () => {
    const {
      user: { _id }
    } = this.props;
    if (_id) {
      return (
        <Nav navbar className="w-100 justify-content-end">
          <NavItem>
            <NavLink
              onClick={this._navigateToOrders}
              style={{ cursor: 'pointer' }}
            >
              Orders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={this._navigateToForms}
              style={{ cursor: 'pointer' }}
            >
              Offerings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={this._navigateToProfile}
              style={{ cursor: 'pointer' }}
            >
              Profile
            </NavLink>
          </NavItem>
        </Nav>
      );
    }
    return (
      <Nav navbar className="w-100 justify-content-end">
        <Button onClick={this._navigateToProfile} color="primary" size="sm">
          Sign in
        </Button>
      </Nav>
    );
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar
        className="navbar navbar-expand-lg position-fixed w-100 bg-light border-primary" // bg-primary navbar-dark
        sticky="top"
        style={{
          borderStyle: 'solid',
          borderWidth: '0px',
          borderBottomWidth: '3px'
        }}
      >
        <Container>
          <NavbarToggler
            className="navbar-light"
            onClick={this._toggleNavBar}
            color={'primary'}
            style={{
              padding: '0px',
              border: 'none',
              outline: 0
            }}
          >
            <Menu className="text-primary" />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <NavbarBrand
              className="text-primary font-weight-bold"
              onClick={this._navigateToHome}
              style={{ cursor: 'pointer' }}
            >
              {/* <img
                src="/static/logo.png"
                style={{
                  height: '24px',
                  width: '24px',
                  marginBottom: '4px',
                  marginRight: '8px'
                }}
              /> */}
              ZERVA
            </NavbarBrand>
            {this.renderNavItems()}
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export const NavBar = withRouter(
  connect((state: StoreState) => state)(_NavBar)
);
