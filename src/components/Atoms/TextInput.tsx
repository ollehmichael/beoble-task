import React from 'react';
import { TextField, styled } from '@mui/material';

interface TextInputProps {
  label: string;
  value: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, onKeyDown }) => {
  return <StyledTextField label={label} value={value} onChange={onChange} onKeyDown={onKeyDown} />;
};

const StyledTextField = styled(TextField)(() => ({
  display: 'flex',
  width: '100%',
  marginTop: '15px',
}));

export default TextInput;
