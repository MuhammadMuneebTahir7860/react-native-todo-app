import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#E5E5E5'
    },
    headerContainer:{
        flex:.15,
        justifyContent:'center',
    },
    headerRow:{
        display:'flex',
        flexDirection:'row',
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
    },
    calenderConatiner:{
        width:'90%',
        marginRight:'auto',
        marginLeft:'auto',
        flex:.20,
    },
    totalTaskContainer:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
    },
    tasksContainer:{
        flex:.50,
    },
    btnContainer:{
        flex:.15,
        justifyContent:"flex-end",
        marginBottom:20,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
    }

})
export default style;