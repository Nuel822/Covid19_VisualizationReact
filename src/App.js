import React from 'react';
import { Provider } from 'react-redux'
import {store} from './action/store'
import DefaultLayout from "./layout/defaultLayout"
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";


function App() {
  return (
    <div>
      <Provider store={store}>
        <DefaultLayout />
      </Provider>
    </div>

  );
}

export default App;
