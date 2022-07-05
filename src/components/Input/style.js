import { StyleSheet } from 'react-native'
import { ms } from 'react-native-size-matters'


export default StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: ms(1),
    borderBottomColor: 'lightgray',
    width: '100%',
    height: 35,
    justifyContent: 'center',
  },
  Input_txt: {
    fontSize: 14,
    lineHeight: 22,
    flex: 1,
    padding: 0,
    height: 25,
    paddingBottom: 2,
  },
})
