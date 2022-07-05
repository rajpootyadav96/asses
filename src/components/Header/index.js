import React, { useState } from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native';
import styles from './style'



const Header = (props) => {
 


  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image style={styles.menuIcon}
            source={require('../../constants/images/menu.png')}
            />
        </TouchableOpacity>
        <Text style={styles.nameText}>{props.screenName}</Text>
        <Image style={styles.userIcon}
        source={props.userIcon}/>
     
    </View>
  )
}

export default Header
