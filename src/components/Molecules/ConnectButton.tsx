import React from 'react';
import { Card, styled } from '@mui/material';
import { Button } from '../Atoms/Button';

interface ConnectButtonProps {
  disabled?: boolean;
  isConnecting: boolean;
  connectMetaMask: any;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ disabled, isConnecting, connectMetaMask }) => {
  return (
    <ConnectButtonContainer>
      <Button
        text={'Connect Your Wallet'}
        disabled={disabled || isConnecting}
        onClick={connectMetaMask}
        isLoading={isConnecting}
      />
    </ConnectButtonContainer>
  );
};

const ConnectButtonContainer = styled(Card)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '300px',
  height: '100px',
  borderRadius: '10px',
  '&:disabled': {
    opacity: '50%',
  },
}));

export default ConnectButton;
