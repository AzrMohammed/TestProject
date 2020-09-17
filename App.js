/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import LandingScreen from './src/screens/LandingScreen'
import { Provider } from 'react-redux'
import store from './src/store'


class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <LandingScreen />
      </Provider>
    );
  }

}

export default App;
