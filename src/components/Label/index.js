import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style';

export default function Label(props) {
  return (
    <View>
      <TouchableOpacity disabled={props.IsTouchabledisabled} style={props.LabelContainerStyle}>
        <Text numberOfLines={1} style={[styles.Txt, props.LabeltxtStyle]}>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
}
