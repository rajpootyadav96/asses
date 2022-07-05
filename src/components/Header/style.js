import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

export default StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        alignItems:"center",
        flexDirection:"row",
        justifyContent:'space-between'
    },
    menuIcon:{
        height:ms(25),
        width:ms(25),
        resizeMode:'contain',
        tintColor:'gray'
    },
    userIcon:{
        height:ms(40),
        width:ms(40),
        resizeMode:'cover',
        borderRadius:ms(25)
    },
    nameText:{
        fontSize:14,
        fontWeight:'bold'
    }
  
});
