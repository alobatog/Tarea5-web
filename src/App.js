import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import WorldInfo from './components/worldInfo';
import NationInfo from './components/nationInfo';
import ChooseNation from './components/chooseNation';
import Chart from './components/chart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>    
            <div className="box">
              <div className="container columns">
                <aside className="menu">
                    < WorldInfo />
                    < NationInfo />
                    < ChooseNation />
                </aside>
                <div className="column">
                  < Chart />
                </div>
              </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
