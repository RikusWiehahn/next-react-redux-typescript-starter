import { Component } from 'react';
import Layout from '../components/templates/Layout';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { StoreState } from '../config/ReduxStore';
import { AuthenticationCard } from '../_user/AuthenticationCard';

interface PageProps extends StoreState {}

class _ProfilePage extends Component<PageProps> {
  renderProfileScreen = (): JSX.Element => {
    const {
      user: { _id }
    } = this.props;
    if (_id) {
      // return profile screen
      return (
        <div>
          <h1>Profile</h1>
        </div>
      );
    }
    return <AuthenticationCard />;
  };
  render(): JSX.Element {
    return (
      <Layout title="Profile">
        <div style={{ height: '4rem' }} />
        <Container>{this.renderProfileScreen()}</Container>
      </Layout>
    );
  }
}

const ProfilePage = connect((state: StoreState) => state)(_ProfilePage);
export default ProfilePage;
