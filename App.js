import React from 'react';
import {View,Text,Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MapView, { Marker } from 'react-native-maps';
import QRcode from './screens/about';
import  Appl from './screens/home';
import Hi from './screens/hi';
const Navigator = createStackNavigator({
  Hi : {screen: Hi},
  QRcode :{screen :QRcode},
  Appl :{screen : Appl},
});

const App= createAppContainer(Navigator);
export default App;