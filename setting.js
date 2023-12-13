
import * as React from 'react'
import { Text, View, StatusBar, TouchableOpacity, Modal, TextInput, ScrollView, ActivityIndicator, Image } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      obj: JSON.parse(this.props.route.params.obj),
      opened_index: this.props.route.params.selected_index,





    }


  }

  async store_nav() {
    await AsyncStorage.setItem("user_store_data", "auth")
    this.props.navigation.navigate("authStackScreens")

  }


  async getData() {
    let data = await AsyncStorage.getItem('arr_cars')
    console.log(data)
    if (data) {
      data = JSON.parse(data)
      this.setState({ arr: data })
    }
  }


  componentDidMount() {
    this.getData()
  //   let fun = this.props.navigation.getParam("passed_reload_fun")
  // fun()
  
  }

componentWillUnmount(){
  // alert("hi")
  let fun = this.props.navigation.getParam("passed_reload_fun")
  fun()
  
}
  async saveUpdates() {
    let data = await AsyncStorage.getItem('arr_cars')
    console.log(data)
    if (data) {
      data = JSON.parse(data)
      data[this.state.opened_index].name = this.state.obj.name
      data[this.state.opened_index].age = this.state.obj.age

      await AsyncStorage.setItem("arr_cars",JSON.stringify(data))

console.log(data)

this.props.navigation.goBack()


    }
   



  }


  render() {
    return (

      <>

        <Text style={{
          alignSelf: 'center',
          color: '#f00',
          fontSize: 30,
          marginVertical: 50
        }}>Setting {this.state.opened_index}</Text>


        <Text style={{
          alignSelf: 'center',
          color: '#f00',
          fontSize: 30,
          marginVertical: 50
        }}>{this.state.obj.name + "---" + this.state.obj.age} </Text>

        <TextInput
          style={{
            width: '80%',
            borderWidth: 2,
            alignSelf: 'center',
            fontSize: 30

          }}
          value={this.state.obj.name}
          onChangeText={(val) => {
            let obj = this.state.obj
            obj.name = val
            this.setState({ obj })
          }}
        />

        <TextInput
          style={{
            width: '80%',
            borderWidth: 2,
            alignSelf: 'center',
            fontSize: 30
          }}
          value={this.state.obj.age + ""}
          onChangeText={(val) => {
            let obj = this.state.obj
            obj.age = val
            this.setState({ obj })
          }}
        />

        <TouchableOpacity
          style={{
            width: '80%',
            height: 50,
            backgroundColor: '#f00',
            alignSelf: 'center'
          }}
          onPress={() => {
            this.saveUpdates()
          }}
        ><Text style={{
          alignSelf: 'center',
          color: '#fff',
          fontSize: 30,

        }}>LogOut From Here </Text></TouchableOpacity>
      </>
    );
  }
}

