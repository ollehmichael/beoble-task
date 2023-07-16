import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import UserInfoCard from '../../components/Organisms/UserInfoCard';
import { useMetaMask } from '../../hooks/MetamaskProvider/MetamaskProvider';
import ConnectButton from '../../components/Molecules/ConnectButton';
import { useAppDispatch, useAppSelector } from '../../redux/stores/hooks';
import { getENSDetails } from '../../redux/reducers/ens/actions';

const Home = () => {
  const dispatch = useAppDispatch();
  const { wallet, hasProvider, isConnecting, connectMetaMask, signMessage } = useMetaMask();
  const { ensDetails } = useAppSelector((store) => store.ens);

  // Get ENS Details if wallet is connected, or if wallet has changed
  useEffect(() => {
    if ((wallet.accounts.length > 0 && wallet.accounts[0] != undefined) || wallet.accounts[0]) {
      dispatch(getENSDetails({ address: wallet.accounts[0] }));
    }
  }, [dispatch, wallet.accounts[0]]);

  return (
    <HomePageContainer>
      <MainWrapper>
        {wallet.accounts.length < 1 && (
          <ConnectButton
            disabled={!window.ethereum?.isMetaMask}
            isConnecting={isConnecting}
            connectMetaMask={connectMetaMask}
          />
        )}
        {hasProvider && wallet.accounts.length > 0 && (
          <UserInfoCard metamaskDetails={wallet} ensDetails={ensDetails} handleSignMessage={signMessage} />
        )}
      </MainWrapper>
    </HomePageContainer>
  );
};

const HomePageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100vw',
  height: 'calc(100vh - 100px)',
}));

const MainWrapper = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'calc(100% - 50px)',
  background: '#191919',
}));

export default Home;
