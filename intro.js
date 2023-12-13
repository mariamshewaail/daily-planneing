
import React from 'react'
import { Text, View ,TextInput} from 'react-native'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
import First1 from './store/Firsrt1'
import Sec from './store/sec'
// import { Picker } from "@react-native-picker/picker";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default class App extends React.Component {


    render() {

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen
      
        name="Home"
        component={First1}
        
      />
      <Stack.Screen name="Profile" component={Sec} />
    </Stack.Navigator>
  </NavigationContainer>


  );

}}