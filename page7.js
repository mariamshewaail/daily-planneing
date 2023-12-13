
import React from 'react'
import CheckBox from 'react-native-check-box'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import  photo from './const/const1';
import  color from './const/const1';
import  font from './const/const1';
import  button from './const/const1';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class App extends React.Component {
  

  constructor(props) {
    super(props)

    this.state = {CuurentDate:'',
    setCurrentDate:'',
      arr:[],
      obj:{},
      month:'',
      isChecked:false
      ,dRK:false
    }}
componentDidMount(){
//   console.log(this.props.route.params.objj[0].val_arr)
// this.setState({arr:this.props.route.params.objj})

  this.getData()
// this.add()


  
}
async getData() {
  

  let stored_arr = await AsyncStorage.getItem("all_data")

      stored_arr=JSON.parse(stored_arr)
      this.setState({arr:stored_arr})
      // console.log(this.state.arr[0].val_arr)
      console.log(stored_arr )
      
  let stored_obj = await AsyncStorage.getItem("obj1")

  stored_obj=JSON.parse(stored_obj)
  this.setState({obj:stored_obj})
  

  

}
async saveData(arr) {
  await AsyncStorage.setItem("all_data", JSON.stringify(arr))
}

check(index,index2){
  var arr =this.state.arr
  var arr2= arr[index].val_arr
 arr2[index2].ischecked=!(arr2[index2].ischecked)
  this.setState(arr)
}



 remove(index,index2){

  var arr=this.state.arr
  
  if(arr[index].val_arr.length==1)
  {  arr[index].val_arr.splice(index2,1)
    arr.splice(index,1)
   this.setState({arr})
  }else{
  arr[index].val_arr.splice(index2,1)
  this.setState({arr})
  this.saveData(arr)
  console.log(arr[index].val_arr.length)}

 }

    render() {

  return (
    <View style={[styles.View,{backgroundColor:this.state.dRK?'#000':'#fff'}]}>
   <View  style={styles.View2}>
    <Image style={styles.img}
    source={{uri:this.state.obj.phot}}/>
    <View>
    <Text style={[styles.text2,{marginLeft:10,color:this.state.dRK?color.color.prim:color.color.dark,marginTop:10,fontWeight:'bold'}]}>{this.state.obj.name==''?'name':this.state.obj.name}</Text>
    <Text style={[styles.text2,{marginLeft:10,color:this.state.dRK?color.color.prim:color.color.dark}]}>Good Morning</Text>
    </View>
    <TouchableOpacity 
    onPress={()=>{
      var dark2=!this.state.dRK
      
      this.setState({dRK:dark2})
    }
    }>
    <MaterialCommunityIcons name='theme-light-dark'   size={30} color={this.state.dRK?color.color.prim:color.color.dark} style={[styles.icon,{marginTop:15}]}/>
    </TouchableOpacity>
    
   
   </View>


<Text style={{marginLeft:10,fontWeight:'bold',marginTop:10,fontSize:20,color:this.state.dRK?color.color.prim:color.color.dark}}>Upcoming Task</Text>


{this.state.arr.map((val,index)=>
  <View style={{flexDirection:'row',marginTop:10,width:'100%',borderBottomWidth:.5,borderColor:'#ccc',paddingBottom:10}}>
  <View style={{marginLeft:5,marginTop:20,width:'20%'}}>
  <View style={{width:30,height:30,borderRadius:15,marginLeft:15,backgroundColor: color.color.prim,alignItems:'center',justifyContent:'center'}}>
  <Text style={{fontSize:15,color:color.color.dark}}>{val.day}</Text></View>
 
  <Text style={{fontSize:16,color:'#ccc'}}>{val.mon_name}</Text>
  


  </View>
  <View style={{width:'100%'}}>
  {val.val_arr.map((val2,index2)=>
  
  
   
   <View style={{flexDirection:'row'}}>
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={[styles.View3,{backgroundColor:val2.colour,flexDirection:'row',width:320}]}>
  <View style={{width:'80%'}}>
<Text style={styles.text2}>{val2.disc}</Text>
</View>
  
  <CheckBox
 
  onClick={()=>{
  this.check(index,index2)
  }}
  isChecked={val2.ischecked}
 
/>
 

</View>

<TouchableOpacity style={{width:70,height:70,borderRadius:35,marginTop:20,alignItems:'center',justifyContent:'center'}}

onPress={()=>{
  this.remove(index,index2)
}}

>

<AntDesign name='delete'   size={35} color={val2.colour }/>

</TouchableOpacity>

<TouchableOpacity style={{width:90,height:90,borderRadius:60,}}>

</TouchableOpacity>
</ScrollView>
</View>

// </View>



)}
</View>
</View>

)}

<TouchableOpacity style={{width:65,height:65,borderRadius:32,marginLeft:320,marginTop:705,position:'absolute'}}
   onPress={()=>{
    
    this.props.navigation.goBack()
    
  }} >
<AntDesign name='pluscircle'   size={65} color={color.color.prim}/>
  </TouchableOpacity>
   </View>
  );

}}

const styles = StyleSheet.create({
    View:{flex:1,},
    icon:{
        marginLeft:150,marginTop:20,
    }
    ,butt:{width:'90%',height:40,borderRadius:20,marginTop:10,alignSelf:'center',backgroundColor:color.color.prim,borderWidth:1,borderRadius:20,borderColor:color.color.dark},
   
   
    img:{width:50,height:50,borderRadius:25,marginLeft:10,marginTop:10},
  
   text3:{fontSize:font.font.mid,color:color.color.dark,fontWeight:'bold',},
    text2:{fontSize:font.font.small,color:color.color.dark,},
    text:{fontWeight:'bold',fontSize:font.font.small,color:color.color.dark,alignSelf:'center'},
    View3:{width:'100%',height:80,flexDirection:'row',borderRadius:20,marginTop:10,alignSelf:'center',alignItems:'center',justifyContent:'center'},
    View2:{width:'100%',height:70,flexDirection:'row'}
  });