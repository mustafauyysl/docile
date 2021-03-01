import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import styles from '../styles';

const Input = (props) => {
  let newArr = props.class && props.class.split(' ');
  let stylesObject = [];

  if (props.class)
    newArr.map((item) => {
      stylesObject.push(styles[item]);
    });

  return (
    <TextInput
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      style={[stylesObject, styleSheet.container, props.style]}
    />
  );
};

const styleSheet = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default Input;
