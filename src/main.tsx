import ReactDOM from 'react-dom/client'
import './index.css'
import '../node_modules/primeflex/primeflex.css'
//theme
import "primereact/resources/themes/lara-light-blue/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import 'primeicons/primeicons.css';
import App from '@/App/App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
