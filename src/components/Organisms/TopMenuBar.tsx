import React from 'react';
import { Box, styled } from '@mui/material';
import Title from '../Atoms/Title';

const TopMenuBar = () => {
  return (
    <TopMenuBarContainer>
      <TitleContainer>
        <Title text="Welcome to Mike's Take Home Task" />
      </TitleContainer>
    </TopMenuBarContainer>
  );
};

const TopMenuBarContainer = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100px',
  background: '#191919',
}));

const TitleContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
}));

export default TopMenuBar;
