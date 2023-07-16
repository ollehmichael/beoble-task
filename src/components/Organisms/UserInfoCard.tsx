import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, styled } from '@mui/material';
import { WalletState } from '../../hooks/MetamaskProvider/MetamaskProvider';
import { ensDetails } from '../../redux/reducers/ens/state';
import { AvatarBox } from '../Atoms/AvatarBox';
import { Button } from '../Atoms/Button';
import DisconnectModal from '../Molecules/DisconnectModal';
import SignedMessageField from '../Molecules/SignMessageField';

interface UserInfoCardProps {
  metamaskDetails: WalletState;
  ensDetails: ensDetails | null;
  handleSignMessage: (message: string, account: string) => Promise<{ publicKey: string | null; signedHash: string | null }>;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ metamaskDetails, ensDetails, handleSignMessage }) => {
  const [openDisconnect, setOpenDisconnect] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [signedHash, setSignedHash] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const handleSign = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const result = await handleSignMessage(message, metamaskDetails.accounts[0]);
      setPublicKey(result.publicKey);
      setSignedHash(result.signedHash);
    }
  };

  // Reset the signed hash and public key when the user disconnects, or changes accounts
  useEffect(() => {
    if (metamaskDetails.accounts.length < 1 || metamaskDetails.accounts[0]) {
      setSignedHash(null);
      setPublicKey(null);
    }
  }, [metamaskDetails.accounts[0]]);

  return (
    <UserInfoCardContainer>
      {/* TAG: Avatar */}
      <AvatarContainer>
        <AvatarBox source={ensDetails != null ? ensDetails.avatar : null} />
      </AvatarContainer>

      <InfoContainer>
        {/* TAG: ENS */}
        {ensDetails != null && ensDetails.name != null && (
          <>
            <InfoTitle>ENS</InfoTitle>
            <InfoValue>{ensDetails.name}</InfoValue>
          </>
        )}

        {/* TAG: Chain ID */}
        <InfoTitle>Chain ID</InfoTitle>
        <InfoValue>{metamaskDetails.chainId}</InfoValue>

        {/* TAG: Wallet Address */}
        <InfoTitle>Wallet Address</InfoTitle>
        <InfoValue>{metamaskDetails.accounts[0]}</InfoValue>

        {/* TAG: Remaining Balance */}
        <InfoTitle>Remaining Balance</InfoTitle>
        <InfoValue>{`${metamaskDetails.balance != null ? metamaskDetails.balance : 0} ETH`}</InfoValue>

        {/* TAG: Signing */}
        <Box>Sign your message!</Box>
        <SignedMessageField
          message={message}
          signedHash={signedHash}
          publicKey={publicKey}
          setMessage={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setMessage(e.target.value)}
          handleSign={(e: React.KeyboardEvent<HTMLInputElement>) => handleSign(e)}
        />
      </InfoContainer>

      {/* TAG: Disconnect */}
      <Button text={'Disconnect'} onClick={() => setOpenDisconnect(!openDisconnect)} />
      <DisconnectModal open={openDisconnect} handleClose={() => setOpenDisconnect(!openDisconnect)} />
    </UserInfoCardContainer>
  );
};

const UserInfoCardContainer = styled(Card)(() => ({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  boxSizing: 'border-box',
  width: '300px',
  height: 'fit-content',
  background: 'white',
  borderRadius: '10px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const InfoContainer = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  gap: '5px',
}));

const InfoTitle = styled(Box)(() => ({
  display: 'flex',
  fontSize: '15px',
}));

const InfoValue = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  fontSize: '20px',
  fontWeight: 'bold',
  whiteSpace: 'pre-line',
  wordBreak: 'break-all',
  marginBottom: '10px',
  borderRadius: '5px',
}));

const AvatarContainer = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100%',
  paddingTop: '30px',
}));

export default UserInfoCard;
