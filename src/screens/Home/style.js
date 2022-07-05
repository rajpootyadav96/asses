import { StyleSheet } from 'react-native';
import * as colors from '../../constants/color';
import { ms } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    topLabel: {
        fontWeight: 'bold',
        fontSize: 18
    },
    input: {
        borderBottomWidth: ms(0),
        width: '90%'
    },
    view1: {
        marginTop: ms(15)
    },
    textLable1: {
        fontWeight: 'bold',
        fontSize: 16
    },
    countryCard: {
        height: ms(80),
        width: ms(140),
        backgroundColor: colors.white,
        borderRadius: ms(5),
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    countryCardImage: {
        height: ms(50),
        width: ms(50),
        borderRadius: ms(5)
    }
    ,
    countryCardLabel: {
        fontWeight: 'bold',
        fontSize: ms(16),
    },
    cityCardContainer: {
        height: ms(200),
        width: ms(155),
        backgroundColor: colors.white,
        borderRadius: ms(5),
        paddingVertical: 15,
    },
    cityCardImage: {
        height: ms(120),
        width: ms(120),
        borderRadius: ms(5)
    },
    cityCardBottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    beachText: {
        fontWeight: 'bold',
        fontSize: 14,
        width: 80,
    },
    heartIcon: {
        height: ms(15),
        width: ms(15)
    },
    searchIcon: {
        height: ms(25),
        width: ms(25),
        resizeMode: 'contain',
        tintColor: colors.gray,
    },
    searchContainer: {
        height: ms(40),
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: ms(5),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: ms(5),
        marginTop: ms(15)
    },
    placeTop: {
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: ms(10)
    },
    text1: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    bottomNavContainer: {
        height: ms(50),
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    navIcon: {
        height: ms(20),
        width: ms(20),
        resizeMode: 'contain',
        tintColor: 'lightgray'
    }

});
