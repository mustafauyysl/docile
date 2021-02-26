import React from 'react';
import View from './View';
import Text from './Text';

const Screen = (props) => {
  return (
    <View>
      {props.headerTitle && (
        <View bg={props.headerBg} class="pb-2 pl-2">
          <Text
            class="display-1 mt-5 font-weight-bold"
            color={props.headerTitleColor}>
            {props.headerTitle}
          </Text>
        </View>
      )}
      <View class="bg-default pl-2 pr-2 h-100">{props.children}</View>
    </View>
  );
};

export default Screen;
