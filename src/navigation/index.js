import React from 'react';
import Navigator from './Navigator';
import { AuthUserProvider } from '../context/AuthUserProvider';
import { LoginUserProvider } from '../context/LoginUserProvider';
import { ThemeProvider } from 'styled-components/native';
import { styledTheme } from '../assets/styledTheme';

const Providers = () => {
  return (
    <ThemeProvider theme={styledTheme}>
      <AuthUserProvider>
        <LoginUserProvider>
          <Navigator />
        </LoginUserProvider>
      </AuthUserProvider>
    </ThemeProvider>
  );
};

export default Providers;
