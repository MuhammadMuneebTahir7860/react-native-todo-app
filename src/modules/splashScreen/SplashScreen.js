import React from "react";
import {Image,View,Text} from 'react-native';
import logo from '../../assets/logo.jpg';
export default function SplashScreen(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:'center',backgroundColor:"white"}}>
            <Image style={{width:200,height:200}} source={logo} />
            <Text>
            Developed By Tassker
            </Text>
        </View>
    )
}