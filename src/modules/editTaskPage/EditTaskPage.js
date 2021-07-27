import React, { useEffect } from "react";
import {Text, View, TextInput,Button ,TouchableOpacity} from "react-native";
import style from './EditTaskPageStyle';
import UseEditTaskPage from "./UseEditTaskPage";
import {ColorDotsLoader} from 'react-native-indicator';
const EditTaskPage = ({ route, navigation }) => {
    const { data } = route.params;
    const{TaskComplete}=route.params;
    const[title,setTitle,description,setDescription,editTaskLoading,setEditTaskLoading,ctaEditHandler]=UseEditTaskPage();
    useEffect(()=>{
        setTitle(data.title);
        setDescription(data.description);
    },[])
  return (
    <View style={style.formContainer}>
      <View style={style.inputContainer}>
        <Text style={{marginTop:20,marginBottom:10,fontSize:18}}>
          What is to be done?
        </Text>
      <TextInput
        style={style.input}
        placeholder="Enter Task Here"
        keyboardType="text"
        onChangeText={title=>setTitle(title)}
        defaultValue={title}
      />
      <Text style={{marginTop:20,marginBottom:10,fontSize:18}}>
          Task Description:
        </Text>
       <TextInput
        style={style.input}
        placeholder="Enter Description"
        keyboardType="text"
        onChangeText={description=>setDescription(description)}
        defaultValue={description}
      />
      {
        editTaskLoading?
        <View style={{width:'100%',alignItems:'center',marginTop:20}}>
        <ColorDotsLoader />
        </View>
        :
        <TouchableOpacity onPress={()=>ctaEditHandler(navigation,data,data.docId)}  style={{backgroundColor:'#FF6347',height:40,borderRadius:10}}>
        <Text  style={{textAlign:'center',color:'white',paddingTop:10}}>
            Edit
        </Text>
    </TouchableOpacity>
      }
     
      </View>
    </View>
  )
};



export default EditTaskPage;