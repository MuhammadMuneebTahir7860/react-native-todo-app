import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#E5E5E5',
    },
    taskDataContainer:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:30,
    },
    descriptionContainer:{
        marginTop:30,
    },
    lineStyle:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        borderWidth: 0.3,
        borderColor:'black',
        bottom:40,
   },
    footerContainer:{
        bottom:20,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        justifyContent:'space-around',
        flexDirection:'row',
    },
    completeText:{
        flexDirection:'row',
        backgroundColor:'#CBDFD6',
        width:100,
        height:40,
        paddingLeft:10,
        alignItems:'center',
        borderRadius:5,
    },
    inCompleteText:{
        flexDirection:'row',
        backgroundColor:'#ffae42',
        width:100,
        height:40,
        paddingLeft:10,
        alignItems:'center',
        borderRadius:5,
    },

    /* <---------Task Delete Alert Modal Code---------> */
    
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      textStyle: {
        color: "black",
        fontWeight: "bold",
        marginLeft:30,
        fontSize:16,
      },
      buttonsContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        position:"relative",
        top:20
      },
      modalText: {
        marginBottom: 15,
        fontSize:16,
      },
});

export default style;