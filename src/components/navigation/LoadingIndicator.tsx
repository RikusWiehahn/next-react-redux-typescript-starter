import React from 'react';
import { Spinner } from 'reactstrap';

interface LoadingScreenProps {
  dark?: boolean;
  fullscreen?: boolean;
}

const _LoadingIndicator: React.FC<LoadingScreenProps> = ({
  dark,
  fullscreen
}) => (
  <div
    className={dark ? 'bg-primary' : 'transparent'}
    style={{
      height: fullscreen ? '100vh' : '100%',
      width: fullscreen ? '100vw' : '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Spinner size="24" color={dark ? 'secondary' : 'primary'} />
  </div>
);

export const LoadingIndicator = _LoadingIndicator;
