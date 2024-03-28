import React from 'react';
import Navigator from './Navigator';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {AuthUserProvider} from '../context/AuthUserProvider';
import {LoginUserProvider} from '../context/LoginUserProvider';

const theme = createTheme({
  colors: {
    bg: '#F9F9F9',
    neutral: {
      c1: '#FFFFFF',
      c2: '#F9F9F9',
      c3: '#DEDEDE',
      c4: '#CCCCCC',
      c5: '#B1B1B1',
      c6: '#404040',
      c7: '#222222',
      c8: '#101010',
      c9: '#000000',
    },
    purple: {
      light: '#b89ff4',
      medium: '#7b44ff',
      dark: '#581de6',
    },
    yellow: {
      light: '#f6bb00',
      medium: '#e6bb52',
      dark: '#ffa500',
    },
  },
  mode: 'light',
  components: {},
});

const Providers = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthUserProvider>
        <LoginUserProvider>
          <Navigator />
        </LoginUserProvider>
      </AuthUserProvider>
    </ThemeProvider>
  );
};

export default Providers;
