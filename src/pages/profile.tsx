import { Component } from 'react';
import Layout from '../components/templates/Layout';
import { Container } from 'reactstrap';

interface PageProps {}

class _ProfilePage extends Component<PageProps> {
  render(): JSX.Element {
    return (
      <Layout title="Profile">
        <div style={{ height: '4rem' }} />
        <Container>
          <h1>Profile</h1>
        </Container>
      </Layout>
    );
  }
}

const ProfilePage = _ProfilePage;
export default ProfilePage;
