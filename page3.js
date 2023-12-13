
import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity,} from 'react-native'
import  photo from './const/const1';
import  color from './const/const1';
import  font from './const/const1';
import  button from './const/const1';

export default class App extends React.Component {


    render() {

  return (
   <View style={styles.View}>
    <Image source={{uri:photo.photo.photo2}}
    style={styles.img}></Image>
<View style={styles.View2}>

    <Text style={[styles.text,{marginTop:20}]}>Sign In </Text>
    <Text style={[styles.text3,{marginTop:90}]}> welcom to Daily planner </Text>
    <View style={styles.textview}>
    <Text style={styles.text2}> let's organise your work with priorty and do everything without bstree</Text>
    </View>
    
</View>
    <TouchableOpacity style={[button.button,{marginTop:330}]}
     onPress={()=>{
      this.props.navigation.navigate("Profile2"
    )
    }}>
    <Text style={[styles.text3,{color:color.color.dark,marginTop:10}]}> Next</Text>
    </TouchableOpacity>
    </View>
  );

}}

const styles = StyleSheet.create({
    View:{flex:1},
    img:{width:'100%',height:390},
   textview:{width:'80%',marginTop:20,alignSelf:'center'},
   text3:{fontSize:font.font.mid,color:'#fff',alignSelf:'center',fontWeight:'bold'},
    text2:{fontSize:font.font.small,color:color.color.prim,alignSelf:'center',},

    text:{fontSize:font.font.mid,color:color.color.yel,alignSelf:'center',fontWeight:'bold',},
    View2:{width:'100%',height:550,borderTopLeftRadius:50,borderTopRightRadius:50,backgroundColor:color.color.dark,position:'absolute',marginTop:320}
  });