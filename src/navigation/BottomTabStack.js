import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenConst} from '../const';
import AnimeListAiring from '../screens/AnimeListAiring/AnimeListAiringIndex';
import AnimeListComplete from '../screens/AnimeListComplete/AnimeListCompleteIndex';
import AnimeListUpcoming from '../screens/AnimeListUpcoming/AnimeListUpcomingIndex';

const Tab = createBottomTabNavigator();

export default function BottomTabStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenConst.ANIMELISTAIRING}
        component={AnimeListAiring}
      />
      <Tab.Screen
        name={ScreenConst.ANIMELISTCOMPLETE}
        component={AnimeListComplete}
      />
      <Tab.Screen
        name={ScreenConst.ANIMELISTUPCOMING}
        component={AnimeListUpcoming}
      />
    </Tab.Navigator>
  );
}
