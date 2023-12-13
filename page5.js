
import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity} from 'react-native'
import  photo from './const/const1';
import  color from './const/const1';
import  font from './const/const1';
import  button from './const/const1';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class App extends React.Component {
  

  constructor(props) {
    super(props)

    this.state = {
    
      obj:{},
   
    }}
componentDidMount(){


  this.getData()
 
}

  
  async getData() {
  

    
    let stored_obj = await AsyncStorage.getItem("obj1")
  
    stored_obj=JSON.parse(stored_obj)
    this.setState({obj:stored_obj})
   
    
  
    
  
  }

    render() {

  return (
    <View style={styles.View}>
   <View  style={styles.View2}>
    <Image style={styles.img}
    source={{uri:this.state.obj.phot}}/>
    <View>
    <Text style={[styles.text3,{marginLeft:10,fontSize:20,marginTop:10}]}>{this.state.obj.name==''?"name":this.state.obj.name}</Text>
    <Text style={[styles.text2,{marginLeft:10}]}>Good Morning</Text>
    </View>
    
   </View>
   <Image source={{uri:photo.photo.photo3}}
   style={styles.img2}/>
   <View style={[styles.textview,{position:'absolute',marginTop:550}]}>
   <Text style={styles.text}>it has roots in classicallatin literature in 45pc making it over 50 years old</Text>
   </View>
   <TouchableOpacity style={[styles.butt,{marginTop:720}]}
    onPress={()=>{
        this.props.navigation.navigate("Profile4"
      )
      }}>
    <View>
        <Text style={styles.text3}> add first task</Text>
    </View>
   </TouchableOpacity>
   </View>
  );

}}

const styles = StyleSheet.create({
    View:{flex:1},
    icon:{
        marginLeft:150,marginTop:10,
    }
    ,butt:{width:'70%',height:60,borderRadius:20,marginTop:630,position:'absolute',alignSelf:'center',alignItems:'center',justifyContent:'center',backgroundColor:color.color.yel},
    img2:{width:"100%",height:'60%'},
    View3:{width:'80%',height:150},
    img:{width:50,height:50,borderRadius:25,marginLeft:10,marginTop:10},
   textview:{width:'80%',marginTop:20,alignSelf:'center'},
   text3:{fontSize:font.font.mid,color:color.color.dark,fontWeight:'bold',},
    text2:{fontSize:font.font.small,color:color.color.dark,},
    text:{fontWeight:'bold',fontSize:font.font.small,color:color.color.dark,alignSelf:'center'},
    View2:{width:'100%',height:70,flexDirection:'row'}
  });