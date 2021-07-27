import React from "react";
import { View, Text, Image, TextInput ,TouchableOpacity} from "react-native";
import style from "./LoginStyle";
import logo from '../../assets/logo.jpg';
import UseLogin from "./UseLogin";
import {ColorDotsLoader} from 'react-native-indicator';
export default function Login({navigation}) {
    const[loginHandler,email,setEmail,password,setPassword,setLoginLoading,loginLoading]=UseLogin();
    return (
        <View style={style.loginContainer}>
            <View style={style.logoContainer}>
                <Image style={style.Image} source={logo} />
            </View>
            <View style={style.formContainer}>
                <Text style={style.welcomeHeading}>
                    Welcome!
                </Text>
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
                    !loginLoading?
                    <TouchableOpacity onPress={()=>loginHandler(navigation)} style={style.loginBtn}>
                    <Text style={style.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
                :
                <View style={{width:'100%',alignItems:'center',marginTop:20}}>
                <ColorDotsLoader />
                </View>
                }
               
                <View style={style.lastContainer}>
                <Text>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><Text style={style.signUpText}>Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}