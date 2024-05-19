import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor:'#F2F2F2',
    },
    image: {
        width: "%100",
        height: 300,
    },
    text: {
        color:'#A52A2A',
        fontSize:24,
        fontWeight:'bold',
    },
    textArea:{
        color:'#A52A2A',
        fontSize:20,
    },
    instructions:{
        borderBottomColor:'#CACACA',
        borderBottomWidth:1,
        paddingBottom:5,
        marginBottom:5,
        
    },
    button:{
        width:"%100",
        height:40,
        backgroundColor:'#FF0000',
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
    },
    buttonText:{
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:14,
    }

})