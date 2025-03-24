import './styles/reset.css';
import './styles/main.css';
import {Provider} from "react-redux";
import {StrictMode} from "react";
import App from "@/app/App.jsx";
import {createRoot} from "react-dom/client";
import store from "@/app/appStore.js";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>,
)