import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import TrendList from './components/TrendList';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        < TrendList />
      </div>
    </Provider>

  );
}

export default App;
