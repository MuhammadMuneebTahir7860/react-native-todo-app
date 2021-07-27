import React, { useState } from "react";
import {ScrollView,TouchableOpacity,Alert, Modal,Text, Pressable, View } from "react-native";
import style from "./DetailsPageStyle";
import UseDetailsPage from "./UseDetailsPage";
import CheckBox from '@react-native-community/checkbox';
import { useEffect } from "react";
import UseCard from '../../commonComponents/taskCard/UseCard';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import EditIcon from 'react-native-vector-icons/FontAwesome';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import CheckMarkIcon from 'react-native-vector-icons/Ionicons';
export default function DetailsPage({ route, navigation }) {
    const { id } = route.params;
    const [setDocId, singleTask, setModalVisible, modalVisible, showModal,deleteHandler] = UseDetailsPage();
    const [taskCompleteHandler, toggleCheckBox] = UseCard();
    useEffect(() => {
        setDocId(id);
    }, [id])
    return (
        <View style={style.mainContainer}>
            <ScrollView>
                <View style={style.taskDataContainer}>
                    {singleTask.map((data) => {
                        return (
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center',width:'90%' }}>
                                    <CheckBox
                                        disabled={false}
                                        value={data.TaskComplete == true ? true : toggleCheckBox}
                                        onValueChange={(newValue) => taskCompleteHandler(newValue, data.docId, data)}
                                    />
                                    <Text style={{ marginLeft: 10, fontSize: 16, textDecorationLine: data.TaskComplete ? 'line-through' : null }}>
                                        {data.title}
                                    </Text>
                                </View>
                                <View style={style.descriptionContainer}>
                                    <Text style={{ color: '#9A9A9A' }}>
                                        {data.description}
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>

            {/* <---------Task Delete Alert Modal Code Start---------> */}

            <View style={style.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={style.centeredView}>
                        <View style={style.modalView}>
                            <Text style={style.modalText}>Are you sure you want to delete?</Text>
                            <View style={style.buttonsContainer}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={style.textStyle}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => deleteHandler(navigation)}
                            >
                                <Text style={style.textStyle}>Yes</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            {/* <---------Task Delete Alert Modal Code End---------> */}

            <View style={style.lineStyle} />
            {
                singleTask.map((item) => {
                    return (
                        <View style={style.footerContainer}>
                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => showModal(item.docId)}>
                                    <DeleteIcon name='delete' size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderLeftWidth: 0.3 }} />
                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Edit Task Page',{data:item})}>
                                    <EditIcon name='edit' size={20} color='black' />
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderLeftWidth: 0.3 }} />
                            <View style={{ justifyContent: 'center' }}>
                                <ShareIcon name='share-social-outline' size={20} color='black' />
                            </View>
                            {
                                item.TaskComplete ?
                                    <>
                                        <View style={{ borderLeftWidth: 0.3 }} />
                                        <View style={style.completeText}>
                                            <Text style={{ color: '#266447', fontWeight: 'bold' }}>
                                                Complete
                                            </Text>
                                            <CheckMarkIcon style={{ marginLeft: 5, marginTop: 1 }} name='checkmark-outline' size={15} color="green" />
                                        </View>
                                    </>
                                    :
                                    <View style={style.inCompleteText}>
                                        <Text style={{ color: '#cb410b', fontWeight: 'bold' }}>
                                            InComplete !
                                        </Text>
                                    </View>
                            }


                        </View>
                    )
                })
            }

        </View>
    )
}