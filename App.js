import 'react-native-gesture-handler';

import React from 'react';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainStackNavigator></MainStackNavigator>
      </PersistGate>
    </Provider>
  );
}
