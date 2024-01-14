import React from 'react';
import { Provider } from 'react-redux';

import Input from './components/Input';
import Output from './components/Output';
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Input />
      <Output />
    </div>
  </Provider>
);

export default App;
