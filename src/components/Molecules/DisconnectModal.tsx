import React from 'react';
import { Box, Modal, Typography, styled } from '@mui/material';
import FindAllAccounts from '../../assets/images/MetaMask_extension_find_all_accounts.gif';
import DisconnectDAPP from '../../assets/images/MetaMask_extension_disconnect_dapp.png';
import DisconnectAllAccounts from '../../assets/images/MetaMask_extension_disconnect_all_accounts.png';

interface DisconnectModalProps {
  open: boolean;
  handleClose: () => void;
}

const DisconnectModal: React.FC<DisconnectModalProps> = ({ open, handleClose }) => {
  return (
    <ModalContainer open={open} onClose={handleClose} onClick={handleClose}>
      <TextContainer>
        <Typography>To securely disconnect your wallet from our DAPP,</Typography>
        <Typography>Please manually disconnect your wallet from the MetaMask extension from your browser.</Typography>
        <br />
        <Typography>1. Within the Account view, click on the 3 dots button on the top right-hand corner.</Typography>
        <Box
          component="img"
          sx={{
            objectFit: 'cover',
            width: '40%',
            height: 'auto',
          }}
          alt="Find All Accounts"
          src={FindAllAccounts}
        />
        <Typography>2. In the expanded menu, click on Connected Sites.</Typography>
        <Box
          component="img"
          sx={{
            objectFit: 'cover',
            width: '40%',
            height: 'auto',
          }}
          alt="Find All Accounts"
          src={DisconnectDAPP}
        />
        <Typography>3. Click on the Disconnect next to any sites you wish to disconnect from:</Typography>
        <Box
          component="img"
          sx={{
            objectFit: 'cover',
            width: '70%',
            height: 'auto',
          }}
          alt="Find All Accounts"
          src={DisconnectAllAccounts}
        />
        <Typography>
          If you have multiple accounts connected to the same site, the option to remove connections from all of your
          accounts will appear when you click disconnect:
        </Typography>
      </TextContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled(Modal)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  height: '100%',
  borderRadius: '10px',
}));

const TextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '50%',
  minWidth: '300px',
  height: '50%',
  padding: '20px',
  gap: '20px',
  borderRadius: '10px',
  background: 'white',
  overflowY: 'scroll',
}));

export default DisconnectModal;
