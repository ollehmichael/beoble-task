import React from 'react';
import { Box, styled } from '@mui/material';
import TextInput from '../Atoms/TextInput';

interface SignedMessageFieldProps {
  message: string;
  signedHash: string | null;
  publicKey: string | null;
  setMessage: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSign: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SignedMessageField: React.FC<SignedMessageFieldProps> = ({
  message,
  signedHash,
  publicKey,
  setMessage,
  handleSign,
}) => {
  return signedHash == null && publicKey == null ? (
    <TextInput label={'Press Enter to Sign'} value={message} onChange={setMessage} onKeyDown={handleSign} />
  ) : (
    <>
      <Text>{`Signed Hash: ${signedHash}`}</Text>
      <Text>{`Public Key: ${publicKey}`}</Text>
    </>
  );
};

const Text = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  fontSize: '20px',
  fontWeight: 'bold',
  whiteSpace: 'pre-line',
  wordBreak: 'break-all',
  marginBottom: '10px',
  borderRadius: '5px',
}));

export default SignedMessageField;
