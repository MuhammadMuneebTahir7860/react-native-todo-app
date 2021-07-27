import React  from 'react';
import Tassker from '../modules/tassker/Tassker';
import { createStackNavigator } from '@react-navigation/stack';
import InputForm from '../commonComponents/inputForm/InputForm';
import SplashScreen from '../modules/splashScreen/SplashScreen';
import Login from '../modules/login/Login';
import { useSelector } from "react-redux";
import SignUp from '../modules/signUp/SignUp';
import GetCurrentUserUidHook from '../customHooks/GetCurrentUserUidHook';
import GetUserOnAuthStateChangedHook from '../customHooks/GetUserOnAuthStateChangedHook';
import DetailsPage from '../modules/detailsPage/DetailsPage';
import EditTaskPage from '../modules/editTaskPage/EditTaskPage';
import CalenderPage from '../modules/calenderPage/CalenderPage';
const Stack = createStackNavigator();
export default function StackNavigation(){
  const auth=useSelector(state=>state.AuthReducer.isUserLoggedIn)
  const[]=GetUserOnAuthStateChangedHook();
  const[loading,uid]=GetCurrentUserUidHook();
    return(
        <Stack.Navigator>
          {loading &&
      <Stack.Screen options={{
        headerShown: false
      }} name="Splash Screen" component={SplashScreen} />
    }
        {!auth && !loading?
        <>
        <Stack.Screen options={{
          headerShown: false
        }} name="Login" component={Login} /> 
         <Stack.Screen options={{
          headerShown: false
        }} name="SignUp" component={SignUp} />  
        </>
        :
        <>  
         <Stack.Screen options={{
        headerShown: false
      }} name="Home" component={Tassker} />
       <Stack.Screen  options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
       name="Calender" component={CalenderPage} /> 
      <Stack.Screen  options={{
          headerStyle: {
            backgroundColor: '#E5E5E5',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
       name="New Task" component={InputForm} /> 
        <Stack.Screen  options={{
          headerStyle: {
            backgroundColor: '#E5E5E5',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
       name="Edit Task Page" component={EditTaskPage} /> 
      <Stack.Screen    options={{
          headerStyle: {
            backgroundColor: '#E5E5E5',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
       name="Today's Task" component={DetailsPage} /> 
      </>  
    } 
            
    </Stack.Navigator>

    )
}