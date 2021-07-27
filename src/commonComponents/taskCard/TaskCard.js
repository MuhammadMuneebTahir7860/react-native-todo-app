import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import UseCard from './UseCard';

export default function TaskCard({ data }) {
    const [taskCompleteHandler, toggleCheckBox] = UseCard();
    return (
        <View style={{
            height: 'auto', backgroundColor: 'white',borderRadius:5,
            paddingTop:7,
            paddingBottom:7,
            paddingLeft:7,
            marginBottom:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        }}
        >
            <View style={{
                flexDirection: 'row', alignItems: 'flex-end', width: '90%'
            }}>
                <CheckBox
                    disabled={false}
                    value={data.TaskComplete == true ? true : toggleCheckBox}
                    onValueChange={(newValue) => taskCompleteHandler(newValue, data.docId, data)}
                />
                <Text style={{ marginLeft: 10, fontSize: 16, textDecorationLine: data.TaskComplete ? 'line-through' : null }}>
                    {data.title}
                </Text>
            </View>
            <Text style={{ color: '#FF6347', marginLeft: 40, textDecorationLine: data.TaskComplete ? 'line-through' : null }}>
                {data?.date}, {data?.time}
            </Text>
        </View>
    )
}