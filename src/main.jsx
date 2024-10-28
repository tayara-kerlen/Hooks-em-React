import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AppEffect from './AppEffect.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <AppEffect />
  </StrictMode>,
)