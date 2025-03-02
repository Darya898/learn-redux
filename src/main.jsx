import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import store from "./store/index.js";
import App from './App.jsx';
import './styles/reset.css';
import './styles/main.css';

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
   </Provider>,
)
