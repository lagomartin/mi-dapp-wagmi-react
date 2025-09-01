// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

import { WagmiProvider, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { http } from 'viem';
import { metaMask } from 'wagmi/connectors';

// Importaciones necesarias para React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 1. Crear una instancia de QueryClient
const queryClient = new QueryClient();

// Configuración de wagmi (sin cambios)
const config = createConfig({
  chains: [sepolia],
  connectors: [metaMask()],
  transports: {
    [sepolia.id]: http(),
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Envolver la aplicación con QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <App />
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);