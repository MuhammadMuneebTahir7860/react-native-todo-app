import React from 'react';
import {Text,ScrollView,View, TouchableOpacity,LogBox} from 'react-native';
import style from './TasskerStyle';
import NotificationIcon  from 'react-native-vector-icons/Ionicons';
import BarIcon from 'react-native-vector-icons/FontAwesome';
import Calender from '../../commonComponents/calender/Calender';
import {BubblesLoader} from 'react-native-indicator';
import UseTassker from './UseTassker';
import TaskCard from '../../commonComponents/taskCard/TaskCard';
LogBox.ignoreAllLogs();
export default function Tassker({navigation}){
   const[tasksData,logoutHandler,userDetailsLoading,filteredTasks,taskLoading]=UseTassker();
    return(
        <View style={style.mainContainer}> 
        <View style={style.headerContainer}>
        <View style={style.headerRow}>
            <View style={{justifyContent:'flex-end',width:'50%'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Tassker</Text>
            </View>
            <View style={{justifyContent:'flex-end',display:'flex',flexDirection:'row',width:'50%'}}>
            <NotificationIcon style={{marginRight:20}} name="notifications-outline" size={20} color='black' />
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <BarIcon name='bars' size={20} color="black" />
            </TouchableOpacity>
            </View>
        </View>
        </View>
        <View style={style.calenderConatiner}>
        <Calender navigation={navigation}/>
        </View>
        <View style={style.totalTaskContainer}>
        <Text style={{fontWeight:'bold',fontSize:16}}>
            Tasks
        </Text>
        </View>
        <View style={style.tasksContainer}>
        {taskLoading? <View style={{justifyContent:'center',alignItems:'center',flex:.50}}>
          <BubblesLoader />
        </View>
        :
          <ScrollView style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:20}}>
            {
                filteredTasks?.map((data)=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate("Today's Task",{id:data.docId})}>
                       <TaskCard data={data} />
                       </TouchableOpacity>
                    )
                })
            }
            </ScrollView>
}  
        </View>
        <View style={style.btnContainer} >
        <TouchableOpacity onPress={()=>navigation.navigate('New Task')} style={{backgroundColor:'#FF6347',height:40,borderRadius:10}}>
            <Text  style={{textAlign:'center',color:'white',paddingTop:10}}>
                + Add a New Task
            </Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}