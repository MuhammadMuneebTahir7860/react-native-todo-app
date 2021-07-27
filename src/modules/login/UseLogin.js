import { useState } from "react"
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/actions/AuthActions";
export default function UseLogin(){
    const dispatch=useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[loginLoading,setLoginLoading]=useState(false);

    const loginHandler = (navigation) =>{
        if(email!="" && password!=""){
        const userData={
            email,
            password,
        }
        dispatch(doLogin(userData,navigation,setLoginLoading))
    }
    else{
        Alert.alert("Enter Email or Password")
    }
    }
    return[loginHandler,email,setEmail,password,setPassword,setLoginLoading,loginLoading]
}