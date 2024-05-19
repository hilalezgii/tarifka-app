import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFA500',
        flex: 1,
        padding: 8,
    },
    content_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 12,
        paddingBottom: 12,
        backgroundColor: '#ECEFF1',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderWidth: 2,
        borderColor: '#D2C9C7',
    },
    image: {
        width: 100,
        height: 80,
        backgroundColor: '#ECEFF1',
        resizeMode: 'contain',
        marginLeft: 15,
        marginTop: 15,
    },
    category_name: {
        fontSize: 20,


    }
});
