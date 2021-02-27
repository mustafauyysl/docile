import React from 'react';
import {View, Text} from 'docile-ui';
import Button from '../src/components/Button';
const App = () => {
  return (
    <View class="bg-default w-100 h-100 justify-content-center align-items-center">
      <Text class="font-weight-bold display-1">Welcome to Docile!</Text>
      <Button btnTitle="Click" onClick={() => alert('clicked')} class="btn btn-primary" />
    </View>
  );
};

export default App;
