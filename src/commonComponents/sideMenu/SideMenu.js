import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import style from './SideMenuStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UseSideMenu from "./UseSideMenu";
import {BubblesLoader} from 'react-native-indicator';
import avatarImage from '../../assets/avatar.png';
export default function SideMenu({navigation},props) {
    const [filterArray,userDetailsLoading,logoutHandler] = UseSideMenu();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={style.avatarSection}>
                        <Image style={{width:100,height:100}} source={avatarImage} />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 30 }}>Welcome!</Text>
                       {userDetailsLoading &&  <BubblesLoader />}
                        {
                            filterArray?.map((item) => {

                                    return (
                        <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>{item?.firstName} {item?.lastName}</Text>
                                    )

                            })
                        }
                    </View>
                </View>
                <View style={style.lineStyle} />
                <View style={style.logoutContainer}>
                <TouchableOpacity style={{display:'flex',flexDirection:'row'}} onPress={() => logoutHandler(navigation)}>
                    <Icon name="logout-variant" size={30} color={"#FF6347"} />
                    <Text style={{fontSize:20,marginLeft:10}}> 
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
            </DrawerContentScrollView>
        </View>
    )
}