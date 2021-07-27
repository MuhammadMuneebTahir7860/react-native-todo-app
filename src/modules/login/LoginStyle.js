import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    logoContainer: {
        flex: .30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: 130,
        height: 130,
    },
    formContainer: {
        flex: .70,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    welcomeHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 60,
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "rgb(237,239,243)"
    },
    loginBtn: {
        backgroundColor: '#FF6347',
        height: 40,
        borderRadius: 10,
        marginTop:20,
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        paddingTop: 8,
        fontSize:16,
    },
    lastContainer:{
        marginTop:30,
        display:'flex',
        flexDirection:'row',
    },
    signUpText:{
        marginLeft:10,
        fontSize:16,
        fontWeight:'bold',
        color:'#FF6347',
    },
});

export default style;