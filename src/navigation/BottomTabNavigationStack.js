import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenConst} from '../const';

import AnimeListAiring from '../screens/AnimeListAiring/AnimeListAiringIndex';
import AnimeListComplete from '../screens/AnimeListComplete/AnimeListCompleteIndex';
import AnimeListUpcoming from '../screens/AnimeListUpcoming/AnimeListUpcomingIndex';
import AnimeListDetail from '../screens/AnimeListDetail/AnimeListDetailIndex';

const Stack = createNativeStackNavigator();

// Bottom tab navigation stacks...
const AnimeListAiringStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ScreenConst.ANIMELISTAIRING}
        component={AnimeListAiring}
      />
      <Stack.Screen
        name={ScreenConst.ANIMELISTDETAIL}
        component={AnimeListDetail}
      />
    </Stack.Navigator>
  );
};

const AnimeListCompletedStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ScreenConst.ANIMELISTCOMPLETE}
        component={AnimeListComplete}
      />
      <Stack.Screen
        name={ScreenConst.ANIMELISTDETAIL}
        component={AnimeListDetail}
      />
    </Stack.Navigator>
  );
};
const AnimeListUpcomingStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ScreenConst.ANIMELISTUPCOMING}
        component={AnimeListUpcoming}
      />
      <Stack.Screen
        name={ScreenConst.ANIMELISTDETAIL}
        component={AnimeListDetail}
      />
    </Stack.Navigator>
  );
};

export {
  AnimeListAiringStackNavigator,
  AnimeListCompletedStackNavigator,
  AnimeListUpcomingStackNavigator,
};
