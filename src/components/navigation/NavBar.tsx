import React, { Component } from 'react';
import { withRouter } from 'next/router';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Container,
  NavbarBrand
} from 'reactstrap';
import { WithRouterProps } from 'next/dist/client/with-router';
import { routes } from '../../config/_routes';

interface NavBarProps extends WithRouterProps {}

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
    this.props.router.push(routes.HOME);
  };
  _navigateToOrders = (): void => {
    this.props.router.push(routes.ORDERS);
  };
  _navigateToForms = (): void => {
    this.props.router.push(routes.FORMS);
  };
  _navigateToProfile = (): void => {
    this.props.router.push(routes.PROFILE);
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar
        className="navbar navbar-expand-lg position-fixed w-100 navbar-dark bg-primary" //
        sticky="top"
      >
        <Container>
          <NavbarToggler
            onClick={this._toggleNavBar}
            style={{ padding: '0px', border: 'none', outline: 0 }}
          />
          <Collapse isOpen={isOpen} navbar>
            <NavbarBrand
              onClick={this._navigateToHome}
              style={{ cursor: 'pointer' }}
            >
              ZERVA
            </NavbarBrand>

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
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export const NavBar = withRouter(_NavBar);
