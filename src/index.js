/* eslint-disable functional/no-expression-statements */
import ReactDOM from 'react-dom/client';
import './index.css';
import init from './init';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = await init();
  root.render(vdom);
};

app();
