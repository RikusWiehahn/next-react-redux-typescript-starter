import React, { Component } from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody
} from 'reactstrap';
import { Fade } from 'react-awesome-reveal';
import { connect } from 'react-redux';
import { routes } from '../../config/_routes';
import withRouter, { WithRouterProps } from 'next/dist/client/with-router';
import { StoreState } from '../../config/ReduxStore';

interface LandingPageProps extends WithRouterProps, StoreState {}

export class _LandingPage extends Component<LandingPageProps> {
  _onClickGetStarted = () => {
    this.props.router.push(routes.PROFILE);
  };
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: 'url(/static/cover.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <Jumbotron
            className="vh-100"
            style={{
              backgroundColor: 'rgba(0,0,25,0)',
              backgroundBlendMode: 'multiply'
            }}
          >
            <Container className="h-100" style={{ maxWidth: '600px' }}>
              <Row className="h-100 align-items-center">
                <Col>
                  <Fade>
                    <h1 className="text-center text-dark display-4">
                      Take orders automatically
                    </h1>
                  </Fade>
                  <Fade delay={500}>
                    <div className="text-center">
                      <Button onClick={this._onClickGetStarted} color="primary">
                        Get started
                      </Button>
                    </div>
                  </Fade>
                </Col>
              </Row>
              <Row></Row>
            </Container>
          </Jumbotron>
        </div>
        <Container>
          <div
            className="min-vh-100"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Row>
              <Col>
                <Fade>
                  <h1 className="text-center">Features</h1>
                </Fade>
              </Col>
            </Row>
            <Row className="h-100" style={{ flex: 1 }}>
              <Col
                className="h-100"
                md={6}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center'
                }}
              >
                <Fade style={{ maxWidth: '450px' }}>
                  <Card>
                    <CardBody>
                      <h2>Feature one</h2>
                      <p>
                        My happened the board for should derisively days, wanted
                        a of overcome on there venerable, in found the past,
                        value the very than them. Not led chief there's six
                        standpoint least accept clock keep mathematicians then
                        being feedback help
                      </p>
                      <h2>Feature two</h2>
                      <p>
                        My happened the board for should derisively days, wanted
                        a of overcome on there venerable, in found the past,
                        value the very than them. Not led chief there's six
                        standpoint least accept clock keep mathematicians then
                        being feedback help
                      </p>
                    </CardBody>
                  </Card>
                </Fade>
              </Col>
              <Col
                className="h-100"
                md={6}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center'
                }}
              >
                <Fade style={{ maxWidth: '450px' }}>
                  <Card>
                    <CardBody>
                      <h2>Feature one</h2>
                      <p>
                        My happened the board for should derisively days, wanted
                        a of overcome on there venerable, in found the past,
                        value the very than them. Not led chief there's six
                        standpoint least accept clock keep mathematicians then
                        being feedback help
                      </p>
                      <h2>Feature two</h2>
                      <p>
                        My happened the board for should derisively days, wanted
                        a of overcome on there venerable, in found the past,
                        value the very than them. Not led chief there's six
                        standpoint least accept clock keep mathematicians then
                        being feedback help
                      </p>
                    </CardBody>
                  </Card>
                </Fade>
              </Col>
            </Row>
          </div>
          <div className="min-vh-100">
            <Row>
              <Col>
                <Fade>
                  <h1 className="text-center">Pricing</h1>
                </Fade>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export const LandingPage = withRouter(
  connect((state: StoreState) => state)(_LandingPage)
);
