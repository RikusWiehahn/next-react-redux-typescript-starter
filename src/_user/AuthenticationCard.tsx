import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../config/ReduxStore';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Col,
  Row
} from 'reactstrap';

interface AuthenticationCardProps extends StoreState {}

interface State {
  showCreateAccountForm: boolean;
  showSignInForm: boolean;
  email: string;
  password: string;
}

class _AuthenticationCard extends Component<AuthenticationCardProps, State> {
  constructor(props: AuthenticationCardProps) {
    super(props);
    this.state = {
      showCreateAccountForm: false,
      showSignInForm: true,
      email: '',
      password: ''
    };
  }

  _onChangeEmail = (email: string) => {
    this.setState({ email });
  };

  _onChangePassword = (password: string) => {
    this.setState({ password });
  };

  renderSignInForm = (): JSX.Element | null => {
    const { showSignInForm, email, password } = this.state;
    if (showSignInForm) {
      return (
        <Card>
          <CardBody>
            <Form
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <FormGroup>
                <Label for="emailInput">Email</Label>
                <Input
                  value={email}
                  onChange={e => this._onChangeEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="emailInput"
                  placeholder="example@example.com"
                  onKeyPress={ev => {
                    if (ev.key === 'Enter') {
                      document.getElementById('passwordInput')?.focus();
                    }
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="passwordInput">Password</Label>
                <Input
                  value={password}
                  onChange={e => this._onChangePassword(e.target.value)}
                  type="password"
                  name="password"
                  id="passwordInput"
                  placeholder="Enter your password"
                />
              </FormGroup>

              <Button color="primary">Sign in</Button>
            </Form>
          </CardBody>
        </Card>
      );
    }
    return null;
  };

  renderCreateAccountForm = (): JSX.Element | null => {
    const { showCreateAccountForm } = this.state;
    if (showCreateAccountForm) {
      return (
        <Form>
          <FormGroup>
            <Label for="emailInput">Email</Label>
            <Input
              type="email"
              name="email"
              id="emailInput"
              placeholder="example@example.com"
            />
          </FormGroup>
          <Button color="primary">Create account</Button>
        </Form>
      );
    }
    return null;
  };

  render(): JSX.Element {
    return (
      <div>
        <Row>
          <Col style={{ maxWidth: '576px' }}>
            {this.renderSignInForm()}
            {this.renderCreateAccountForm()}
          </Col>
        </Row>
      </div>
    );
  }
}

export const AuthenticationCard = connect((state: StoreState) => state)(
  _AuthenticationCard
);
