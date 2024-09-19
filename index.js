/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store ,persistor} from './app/store/storeConfig';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const Main = () => {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  };

AppRegistry.registerComponent(appName, () => Main);
