
import React from 'react'
import { Text, View ,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity, Alert,ActivityIndicator} from 'react-native'
import  photo from './const/const1';
import  color from './const/const1';
import  font from './const/const1';
import  button from './const/const1';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class App extends React.Component {




  constructor(props) {
    super(props)

    this.state = { CuurentDate:'',
    setCurrentDate:'',
    tex:'',
    fitness:true,
    food:true,
    todo:true,
    work:true,
    stat:'#fff',
    obj:{}
    ,arr:[]
    ,month:'',
    viw:false,
    animating: true
   
   
    }}   
    
    // closeActivityIndicator = () => {setTimeout(() => {this.setState({
    //   animating: false }), this.props.navigation.navigate("Profile3",{objj:this.state.arr,mon:this.state.month}
    //   )}, 10000)
    // }
      
    async getData() {
  

      let stored_arr = await AsyncStorage.getItem("all_data")
     if(stored_arr!=null){
          stored_arr=JSON.parse(stored_arr)
          this.setState({arr:stored_arr})
          console.log(stored_arr )}
          
    
    
      
    
    }
    async getData2() {
  

     
          
      let stored_obj = await AsyncStorage.getItem("all_obj")
    
      stored_arr=JSON.parse(stored_obj)
      this.setState({obj:stored_obj})
      console.log(this.state.obj)
      
    
      
    
    }
    
    async saveData(obj) {
      await AsyncStorage.setItem("all_data", JSON.stringify(this.state.arr))
     
    }
    
    
    async saveData2(obj) {
      
      await AsyncStorage.setItem("all_obj", JSON.stringify(this.state.obj))
    }
    
    
    componentDidMount(){
      this.setmonth(new Date().getMonth() + 1)
      // this.getData()
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1; 
        var year = new Date().getFullYear(); 
        var hours = new Date().getHours(); 
        var min = new Date().getMinutes(); 
        var sec = new Date().getSeconds(); 
        var date1=hours + ':' + min + ':' + sec
        var date2=date + '/' + month + '/' + year 
        this.setState({CuurentDate:date2})  
        this.setState({setCurrentDate:date1})  
      
      
    }
  
    add_obj(){
      // this.setState({stat:'#ff9'})
      // if(this.state.stat=='#fff'||this.state.tex==''){}
      // else{ 
        var  obj1={
      da: new Date().getDate(),
      mo:new Date().getMonth() + 1,

    disc:this.state.tex,
    colour:this.state.stat
    ,ischecked:false
      }
  
  this.setState({obj:obj1})
 this.saveData2(obj1)
    }

    
add2(){
 
this.getData2()

  // console.log(this.state.obj)
  var arr = this.state.arr
  var date =new Date().getDate();
  var date2 =new Date().getMonth() + 1;
  var mass=this.state.obj
  this.setmonth(mass.mo)

  if(arr.length==0){
      var obje={day:date,
        mon:date2,
      val_arr:[mass],
    mon_name:this.state.month}
     
      arr.push(obje)
      this.setState({arr})
      this.saveData(arr)
  
}else{
 
  //  this.getData()
  for(var i=0;i<arr.length;i++){
   
        if(mass.da==arr[i].day&&mass.mo==arr[i].mon){
          arr[i].val_arr.push(mass)
          this.setState({arr})
          this.saveData(arr)

        }else{
          
          var obje={day:mass.da,
            mon:mass.mo,
          val_arr:[mass],
        mon_name:this.state.month}
          var arr= this.state.arr
          arr.push(obje)
          this.setState({arr})
        this.saveData(arr)
        }
}}

}
    
check(){
  // this.add_obj()
  if(this.state.tex==''||this.state.stat=='#fff'){
    
   
    
  }
  else{
    // this.add_obj()
    // this.setState({viw:true})
    this.add2()
    // this.closeActivityIndicator()
  
  
    
  }
}


  
setmonth(mo){
  var monthName=this.state.month
  var month =mo
  if(month == 1)  monthName = "January"
  else if(month == 2) monthName = "February" 
  else if(month == 3) monthName = "March"
  else if(month == 4) monthName = "April"
  else if(month == 5) monthName = "May"
  else if(month == 6) monthName = "June"
  else if(month == 7) monthName = "July"
  else if(month == 8) monthName = "August"
  else if(month == 9) monthName = "September"
  else if(month == 10) monthName = "October"
  else if(month == 11) monthName = "November"
  else if(month == 12) monthName = "December"
  this.setState({month:monthName})

  
}
    render() {

  return (
    <View style={styles.View}>
   <View  style={[styles.View2,{borderBottomWidth:2,borderColor:'#ccc',height:70,alignItems:'center'}]}>
 
   
    <Text style={[styles.text3,{marginLeft:150}]}>add task</Text>
    <TouchableOpacity 
    style={{marginLeft:70,width:50,height:45,borderRadius:25,backgroundColor:color.color.prim,borderWidth:3,borderColor:'#ccc',alignItems:'center',justifyContent:'center'}}
    onPress={()=>{
      if(this.state.arr.length!=0)
     { this.props.navigation.navigate("Profile3",{objj:this.state.arr,mon:this.state.month}
      )}
    }
    }>
      {/* <Text style={[styles.text,{fontWeight:'bold',marginLeft:0,marginTop:0}]}>Home</Text> */}
    <MaterialCommunityIcons name='home'   size={30} color={this.state.dRK?color.color.prim:color.color.dark} style={[styles.icon,{marginTop:0}]}/>
    </TouchableOpacity>
    
    
   </View>
   
  
   <Text style={[styles.text,{marginTop:50}]}>select category</Text>
   <View style={[styles.View2,{justifyContent:'space-around',marginTop:30,marginBottom:30}]}>
    <TouchableOpacity  onPress={()=>{
        this.setState({fitness:false,stat:color.color.org,
        food:true,
      work:true,
    todo:true}
    )
    
      }}
      style={{alignItems:'center',justifyContent:'center'}} >
        <View style={[styles.ICONVIEW,,{backgroundColor:color.color.org}]}>
        <Ionicons name='fitness-outline'   size={30} color={'#fff'} style={{marginTop:5,marginLeft:5}}/>
      
        </View>
        <Text style={[styles.text,{color:color.color.org}]}>fitness</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={{alignItems:'center',justifyContent:'center'}}
     onPress={()=>{
        this.setState({food:false,stat:color.color.blu,
          fitness:true,
          work:true,
        todo:true,})
      }}  >
        <View style={[styles.ICONVIEW,{backgroundColor:color.color.blu}]}>
        <Ionicons name='fast-food-outline'   size={30} color={'#fff'} style={{marginTop:5,marginLeft:5}}/>
        </View>
         
  <Text style={[styles.text,{color:color.color.blu}]}>food</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={{alignItems:'center',justifyContent:'center'}}
    onPress={()=>{
        this.setState({work:false,
          stat:color.color.yel,
          food:true,
          fitness:true,
        todo:true})
      }} >
        <View style={[styles.ICONVIEW,{backgroundColor:color.color.yel}]}>
        <MaterialCommunityIcons
 name='account-network-outline'   size={30} color={'#fff'} style={{marginTop:5,marginLeft:5}}/>
        </View>
        <Text style={[styles.text,{color:color.color.yel}]}>work</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={{alignItems:'center',justifyContent:'center'}}
    onPress={()=>{
        this.setState({todo:false,stat:color.color.red,
          food:true,
          fitness:true,
        todo:true})
      }}  >
        <View style={[styles.ICONVIEW,{backgroundColor:color.color.red}]}>
        <MaterialCommunityIcons
 name='clipboard-list-outline'   size={30} color={'#fff'} style={{marginTop:5,marginLeft:5}}/>
        </View>
        <Text style={[styles.text,{color:color.color.red}]}>todo list</Text>
    </TouchableOpacity>
    
   </View>
   {/* <View style={{flexDirection:'row',borderBottomWidth:2,borderColor:'#ccc'}}>



  </View> */}
  
   <Text style={styles.text}>time</Text>
   <View style={styles.texview}>
   <Text style={[styles.text,{color:'#ccc'}]}>{this.state.CuurentDate}</Text>
   <Text style={[styles.text,{color:'#ccc'}]}>{this.state.setCurrentDate}</Text>
   </View>
   {/* <Text style={styles.text}>Add remainder</Text>
   <TextInput style={styles.textinp}></TextInput> */}
   <Text style={styles.text}>Add discription</Text>
   <TextInput style={[styles.textinp,{height:50,backgroundColor:this.state.stat}]}
   value={this.state.tex}
   onChangeText={(val)=>
    this.setState({tex:val})
    

   }
  //  onEndEditing={this.add_obj()}
   
   ></TextInput>
   {/* <Text style={styles.text}>Add notifications</Text>
   <TextInput style={styles.textinp}></TextInput> */}
   <View style={{flexDirection:'row',marginTop:530,position:'absolute',justifyContent:'space-between'}}>
   <TouchableOpacity style={{width:54,height:54,backgroundColor:color.color.yel,borderRadius:27,marginLeft:5,marginTop:190}}
   onPress={()=>{
   
    this.add_obj()
    
  }} >
<AntDesign name='check'   size={40} color={color.color.dark} style={{marginTop:7,marginLeft:8}}/>
  </TouchableOpacity>

   <TouchableOpacity style={[styles.butt,{marginTop:190}]}
     onPress={()=>{
     
    // this.add_obj()
    
      this.check()
      this.props.navigation.navigate("Profile3",{objj:this.state.arr,mon:this.state.month}
       )
      this.setState({tex:''})
      this.setState({stat:'#fff'})
    //   this.setState({obj:{date:'',
    //   tim:'',
    // disc:'',
    // colour:''}})
    // this.props.navigation.navigate("Profile3",{objj:this.state.arr,mon:this.state.month})
    
     
    }} >
    <Text style={[styles.text3,{alignSelf:'center',marginTop:10}]}> Save</Text>
    </TouchableOpacity>
  
   </View>
   {/* {
    this.state.viw?
(   <ActivityIndicator size="large" color="#00ff00"   animating = {this.state.animating} />):
null
} */}

   </View>
  );


}}


const styles = StyleSheet.create({
    View:{flex:1}
  ,textinp:{width:'100%',height:40,borderBottomWidth:2,borderColor:'#ccc'}
    ,butt:{width:'84%',height:60,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:color.color.yel},
    ICONVIEW:{width:40,height:40,borderRadius:20,},
   text3:{fontSize:font.font.mid,color:color.color.dark,fontWeight:'bold',},
    text2:{fontSize:font.font.small,color:color.color.dark,},
    text:{fontSize:font.font.small,color:color.color.dark,marginLeft:10,marginTop:10},
    View2:{width:'100%',height:50,flexDirection:'row'},
    texview:{flexDirection:'row',height:40,justifyContent:'space-between',marginTop:10}
  });