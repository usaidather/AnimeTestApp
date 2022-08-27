import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabStack from './BottomTabStack';
import ScreenConst from '../const/ScreenConst';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenConst.ANIMEBOTTOMTAB}
        component={BottomTabStack}
      />
    </Stack.Navigator>
  );
}
