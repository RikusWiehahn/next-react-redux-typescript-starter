import { Component } from 'react';
import Layout from '../components/templates/Layout';
import { Container } from 'reactstrap';

interface PageProps {}

class _OrderPage extends Component<PageProps> {
  render(): JSX.Element {
    return (
      <Layout title="Orders">
        <div style={{ height: '4rem' }} />
        <Container>
          <h1>Orders</h1>
        </Container>
      </Layout>
    );
  }
}

const OrderPage = _OrderPage;
export default OrderPage;
