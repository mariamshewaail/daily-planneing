
import * as React from 'react'
import { Text, View, StatusBar, TouchableOpacity, Modal, TextInput, ScrollView, ActivityIndicator, Imagee } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      arr: [
        {
          name: 'ali',
          age: 20
        },
      ],
      userName: ''


    }


  }
  componentDidMount() {
    this.getData()
    // this.saveData()
  }


async saveData(){
  let defaultArr= [
    {
      name: 'ali',
      age: 20
    }, {
      name: 'mido',
      age: 25
    },
  ]
await AsyncStorage.setItem("arr_cars",JSON.stringify(defaultArr))
}


  async getData() {
    let data = await AsyncStorage.getItem('arr_cars')
    if (data) {
      data = JSON.parse(data)
      this.setState({ arr: data })
    }
  }




  reload_fun(){
    this.getData()
  }




  render() {
    return (

      <>

        <Text style={{
          alignSelf: 'center',
          color: '#f00',
          fontSize: 30,
          marginVertical: 50
        }}> hello {this.state.userName} </Text>


        {this.state.arr.map((item, index) => <>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              borderWidth: 2,
              alignSelf: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center'
            }}
            onPress={() => {
              this.props.navigation.navigate("Profile3",
                {
                  obj: JSON.stringify(item),
                  selected_index: index,
                  passed_reload_fun:this.reload_fun.bind(this)
                })

              // console.log(item)
            }}
          >
            <Text style={{
              fontSize: 25
            }}>{item.name}</Text>
            <Text style={{
              fontSize: 25
            }}>{item.age}</Text>
          </TouchableOpacity>

        </>)}


      </>
    );
  }
}

