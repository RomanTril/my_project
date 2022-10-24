import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import {setupStore} from "./redux";

const store=setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
        </Provider>
);








