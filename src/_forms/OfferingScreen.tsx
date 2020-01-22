import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../config/ReduxStore';

interface PageProps {}

class _OfferingsScreen extends Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render(): JSX.Element {
    return <div></div>;
  }
}

export const OfferingsScreen = connect(
  (state: StoreState) => state,
  {}
)(_OfferingsScreen);
