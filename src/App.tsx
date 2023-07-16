import React from 'react';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import TopMenuBar from './components/Organisms/TopMenuBar';
import { MetaMaskContextProvider } from './hooks/MetamaskProvider/MetamaskProvider';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <MetaMaskContextProvider>
        <TopMenuBar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MetaMaskContextProvider>
    </div>
  );
};

export default App;
