import React from 'react';
import { styled, IconButton, CircularProgress } from '@mui/material';

const StyledButton = styled(IconButton)(() => ({
  width: '100%',
  borderRadius: '0px',
  background: '#f9bf52',
  color: '#333333',
  padding: '20px',
}));

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: any;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, disabled, onClick, isLoading }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {!isLoading ? text : <CircularProgress size={20} />}
    </StyledButton>
  );
};
