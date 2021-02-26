import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const DView = (props) => {
  let newArr = props.class && props.class.split(' ');
  let stylesObject = [];

  if (props.class)
    newArr.map((item) => {
      stylesObject.push(styles[item]);
    });

  return <View style={stylesObject}>{props.children}</View>;
};

export default DView;
