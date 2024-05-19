import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        margin:10,
        position:'relative',
    },
    image:{
        width:'%100',
        height:200,
        borderRadius:10,

    },
    text_wrapper:{
        backgroundColor:'#00000090',
        position:'absolute',
        width:'100%',
        padding:4,
        bottom:0,
        right:0,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'right'
    },
})