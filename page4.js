
import React, {useState} from 'react';
import  photo from './const/const1';
import  color from './const/const1';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  StyleSheet,
  Text,

  TouchableOpacity,
  Image,ImageBackground,

  TextInput
} from 'react-native';


import ImagePicker from 'react-native-image-picker';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

const App = ({navigation}) => {


  const [filePath, setFilePath] = useState({});
  const [text, onChangeText] = React.useState('');
  const [img, setimg] = React.useState(photo.photo.photo5);
  const [obj, setobj] =useState({});


const  saveData=async(obj)=> {
  await AsyncStorage.setItem("obj1", JSON.stringify(obj))
}



const add=()=>{
  
  var obj1 ={phot:img,
  name:text}
  setobj(obj1)
  saveData(obj1)
}
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      console.log('uri -> ', response.assets[0].uri);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      
      setFilePath(response);
      setimg(response.assets[0].uri)
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      
    
        <ImageBackground source={{uri:photo.photo.photo4}}
        style={{flex:1,alignItems:'center'}}>
         
       
        
        <TouchableOpacity
        
          
          onPress={() => {chooseFile('photo');
          add()}}>
          

       
          <Image
    source={{uri:img}}
    style={{width:150,height:150,borderRadius:75,borderColor:'#ccc',borderWidth:4,marginTop:80}}
    />
   
        </TouchableOpacity>
        <Text style={[styles.textStyle,{fontSize:20,fontWeight:'bold',marginTop:10}]} >Enter Name</Text>
        <TextInput
        style={styles.textinp}
        onChangeText={onChangeText}
        value={text}
       
      />
      <TouchableOpacity style={[styles.textinp,{marginTop:390,marginLeft:270,width:'30%',backgroundColor:color.color.yel}]}
     onPress={() => {add();
      navigation.navigate('Profile1')
      console.log(obj)
     }} >
      <Text style={[styles.textStyle,{fontSize:20,fontWeight:'bold'}]} >NEXT</Text>
      </TouchableOpacity>
       
      </ImageBackground>
     
      {/* </View> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width:190,
    height:190,borderRadius:95,

  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  }
  ,textinp:{width:'80%',height:50,borderRadius:2,backgroundColor:'#fff',borderBottomWidth:1,borderColor:'#ccc'}
});