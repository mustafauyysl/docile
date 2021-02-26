import React from 'react';
import {Text} from 'react-native';
import styles from '../styles';

const DText = (props) => {
  let newArr = props.class && props.class.split(' ');
  let stylesObject = [];

  if (props.class)
    newArr.map((item) => {
      stylesObject.push(styles[item]);
    });

  return <Text style={stylesObject}>{props.children}</Text>;
};

export default DText;
