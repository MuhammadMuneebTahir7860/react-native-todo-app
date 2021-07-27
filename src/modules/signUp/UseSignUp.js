import { useState } from "react"
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import {doSignUp} from '../../redux/actions/AuthActions';

export default function UseSignUp(){
    const dispatch=useDispatch();
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[signUpLoading,setSignUpLoading]=useState(false);
    const signUpHandler = (navigation) =>{
        const userData={
            firstName,
            lastName,
            email,
            password,
            date:new Date(),
        }
        if(firstName!='' && lastName!='' && email!='' && password!=''){
        dispatch(doSignUp(userData,navigation,setSignUpLoading))
        }
        else{
            Alert.alert("Please Fill All Fields")
        }

    }

    return[signUpHandler,firstName,setFirstName,lastName,setLastName,email,setEmail,password,setPassword,signUpLoading]
}