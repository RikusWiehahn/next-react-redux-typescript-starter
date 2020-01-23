import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import Router from 'next/router';
import withReduxStore, { Store } from '../config/ReduxStore';

import { NavBar } from '../components/navigation/NavBar';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingIndicator } from '../components/navigation/LoadingIndicator';

Router.events.on('routeChangeStart', (url: string) => {
  console.log(`%cLoading: ${url}`, 'color: green');
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

interface Props {
  reduxStore: Store;
}

class MyApp extends App<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    let persistor = persistStore(reduxStore);
    return (
      <div>
        <Provider store={reduxStore}>
          <PersistGate
            loading={<LoadingIndicator fullscreen />}
            persistor={persistor}
          >
            <NavBar />
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default withReduxStore(MyApp);
