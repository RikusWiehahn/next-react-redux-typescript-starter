import * as React from 'react';
import Head from 'next/head';
import '../../config/custom.scss';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = '' }) => (
  <div>
    <Head>
      <title>{`ZERVA | ${title}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>{children}</div>
    <footer></footer>
  </div>
);

export default Layout;
