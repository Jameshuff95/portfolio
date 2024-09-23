import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);