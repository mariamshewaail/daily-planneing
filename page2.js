
import React from 'react'
import { Text, View ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import  photo from './const/const1';
import  color from './const/const1';
import  font from './const/const1';
import  button from './const/const1';

export default class App extends React.Component {


    render() {

  return (
   <View style={styles.View}>
    <Image source={{uri:photo.photo.photo1}}
    style={styles.img}></Image>
<View style={styles.View2}>

    <Text style={[styles.text,{marginTop:20}]}>Hi! welcom to Daily </Text>
    <Text style={styles.text}> planner</Text>
    <View style={styles.textview}>
    <Text style={styles.text2}> it's long established fact that the reader will be distracted by the readablecontent of page when.</Text>
    </View>
    
</View>
    <TouchableOpacity style={[button.button,{marginTop:330}]}
    onPress={()=>{
      this.props.navigation.navigate("Profile"
    )
    }}>
    <Text style={styles.text3}> Get Started</Text>
    </TouchableOpacity>
    </View>
  );

}}

const styles = StyleSheet.create({
    View:{flex:1},
    img:{width:'100%',height:390},
   textview:{width:'90%',marginTop:70,alignSelf:'center'},
   text3:{fontSize:font.font.mid,color:color.color.dark,alignSelf:'center',fontWeight:'bold',marginTop:10},
    text2:{fontSize:font.font.small,color:color.color.prim,alignSelf:'center',},
    text:{fontSize:font.font.mid,color:color.color.yel,alignSelf:'center',fontWeight:'bold',},
    View2:{width:'100%',height:550,borderTopLeftRadius:50,borderTopRightRadius:50,backgroundColor:color.color.dark,position:'absolute',marginTop:320}
  });