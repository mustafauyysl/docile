import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../styles';
import Text from './Text';

const Button = (props) => {
  let newArr = props.class && props.class.split(' ');
  let stylesObject = [];

  if (props.class)
    newArr.map((item) => {
      stylesObject.push(styles[item]);
    });

  return (
    <TouchableOpacity onPress={props.onClick} style={stylesObject}>
      <Text class="title">{props.btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;
