import React from "react";
import {Keyboard,View, Text, Image, TextInput ,TouchableOpacity,ScrollView} from "react-native";
import style from './SignUpStyle';
import logo from '../../assets/logo.jpg';
import UseSignUp from "./UseSignUp";
import {ColorDotsLoader} from 'react-native-indicator';
export default function SignUp({navigation}){
    const [keyboardIsOpen, setKeyboardIsOpen] = React.useState(false);
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsOpen(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsOpen(false);
    });
    const[signUpHandler,firstName,setFirstName,lastName,setLastName,email,setEmail,password,setPassword,signUpLoading]=UseSignUp();
    return(
        <View style={style.signUpContainer}>
             {!keyboardIsOpen &&
           <View style={style.logoContainer}>
                <Image style={style.Image} source={logo} />
            </View>
}
            <View style={style.formContainer}>
                <Text style={style.welcomeHeading}>
                    Welcome!
                </Text>
                <TextInput
                    style={style.input}
                    placeholder="First Name"
                    keyboardType="Text"
                    onChangeText={(firstName)=>setFirstName(firstName)}
                />
                <TextInput
                    style={style.input}
                    placeholder="Last Name"
                    keyboardType="Text"
                    onChangeText={(lastName)=>setLastName(lastName)}
                />
                  <TextInput
                    style={style.input}
                    placeholder="Email"
                    keyboardType="Text"
                    onChangeText={(email)=>setEmail(email)}

                />
                <TextInput
                    style={style.input}
                    placeholder="Password"
                    keyboardType="Text"
                    secureTextEntry
                    onChangeText={(password)=>setPassword(password)}
                />
                {
                    signUpLoading?
                    <View style={{width:'100%',alignItems:'center',marginTop:20}}>
                    <ColorDotsLoader />
                    </View>
                    :
                    <TouchableOpacity onPress={()=>signUpHandler(navigation)} style={style.loginBtn}>
                    <Text style={style.loginText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                }
                
                </View>
        </View>
       
    )
}