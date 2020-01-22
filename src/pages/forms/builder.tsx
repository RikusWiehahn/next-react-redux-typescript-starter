import { Component } from 'react';
import Layout from '../../components/templates/Layout';
import { Container } from 'reactstrap';

interface PageProps {}

class _FormsPage extends Component<PageProps> {
  render(): JSX.Element {
    return (
      <Layout title="Offer builder">
        <div style={{ height: '4rem' }} />
        <Container>
          <h1>Offering Builder</h1>
        </Container>
      </Layout>
    );
  }
}

const FormsPage = _FormsPage;
export default FormsPage;
