import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { Colors } from "../../constants/ColorConstants";
import { FontType } from "../../constants/FontType";


export const TextInputStyles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
        justifyContent : 'center'
    },
    inputContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderColor: Colors.neutral20,
        backgroundColor:Colors.white,
        height: responsiveHeight(5.5),
        borderRadius: 6,
        paddingHorizontal: 7,
    },
    labelStyles: {
        color: Colors.neutral70,
        marginBottom: 6,
        fontFamily : FontType.Roboto_Medium,
        fontSize: responsiveFontSize(1.6)
    },
    inputBox: {
        fontFamily:FontType.Roboto_Medium,
        color: Colors.neutral80,
        fontSize: responsiveFontSize(1.8),
        fontWeight:'500',
        width: '100%',
        height: '100%',
        marginHorizontal:5,
    },
    eye: {
        position: 'absolute',
        right: 15,
        padding: 5,
        paddingLeft: 10,
        top : '45%',
    },
    icon: {
        position: 'absolute',
        right: '5%',
        top: '45%',
        padding: 5,
        paddingLeft: 10,
    },
    errorText: {
        color: Colors.negative50,
        fontSize: responsiveFontSize(1.5),
        position: 'absolute',
        bottom: '-30%',

    }
});