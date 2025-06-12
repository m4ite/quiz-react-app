import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/Navbar'
import './index.css';


import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
