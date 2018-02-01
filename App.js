import React from 'react';
import Expo from 'expo';
import { Text, View, Image, ImageBackground } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CityRedux from './city'
import Home from './home'
import DatasRedux from './datas'
import CameraExample from './photo'


/*
const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
  City: {
    screen: City,
  },
});

export default RootNavigator;
*/

const RootTabs = TabNavigator({
  Home: {
    screen: Home,
  },
  City: {
    screen: CityRedux,
  },
  Datas: {
    screen: DatasRedux,
  },
  CameraExample: {
    screen: CameraExample,
  }
});


const store = createStore(dataReducer);

function dataReducer(state, action) {
  if(action.type == 'updateCO') {
    console.log(action.valueCO);
    return {co: action.valueCO}
  } else {
    return {co: null}
  }
}

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
       <RootTabs/>
      </Provider>
    )
  }
}

export default App;
