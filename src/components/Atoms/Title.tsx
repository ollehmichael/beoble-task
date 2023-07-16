import React from 'react';
import { Typography, styled } from '@mui/material';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <TitleTypography variant="h6" color="white">
      {text}
    </TitleTypography>
  );
};

const TitleTypography = styled(Typography)(() => ({}));

export default Title;
