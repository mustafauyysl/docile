import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

const DView = (props) => {
  let newArr = props.class && props.class.split(' ');
  let stylesObject = [];

  if (props.class)
    newArr.map((item) => {
      stylesObject.push(styles[item]);
    });

  if (props.class && newArr.includes('btn')) {
    return (
      <TouchableOpacity
        onPress={props.onClick}
        style={[
          stylesObject,
          props.bg ? {backgroundColor: props.bg} : null,
          props.style,
        ]}>
        {props.children}
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={[
          stylesObject,
          props.bg ? {backgroundColor: props.bg} : null,
          props.style,
        ]}>
        {props.children}
      </View>
    );
  }
};

export default DView;
