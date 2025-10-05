import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import { TranslationProvider } from './TranslationContext.jsx'; // ⬅️ import your context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TranslationProvider>    {/* ⬅️ wrap App with provider */}
        <App />
      </TranslationProvider>
    </BrowserRouter>
  </StrictMode>,
);
