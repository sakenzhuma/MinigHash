import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css';
import './global.css';
import App from './App.tsx';
import { MantineProvider, createTheme } from '@mantine/core';
import { theme } from './libs/theme.ts';
import { clienId } from './libs/common.ts';
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { Base } from '@thirdweb-dev/chains';
const AppTheme = createTheme(theme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={AppTheme}>
      <ThirdwebProvider clientId={clienId} activeChain={Base}>
        <App /></ThirdwebProvider>
    </MantineProvider>
  </React.StrictMode>,
)
