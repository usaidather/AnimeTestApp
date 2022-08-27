import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenConst, StringConst} from '../const';
import CustomBottomTabBar from './CustomBottomTabBar';
import {
  AnimeListAiringStackNavigator,
  AnimeListCompletedStackNavigator,
  AnimeListUpcomingStackNavigator,
} from './BottomTabNavigationStack';
// import AnimeListAiring from '../screens/AnimeListAiring/AnimeListAiringIndex';
// import AnimeListComplete from '../screens/AnimeListComplete/AnimeListCompleteIndex';
// import AnimeListUpcoming from '../screens/AnimeListUpcoming/AnimeListUpcomingIndex';

const Tab = createBottomTabNavigator();

export default function BottomTabStack() {
  const tabs = [
    {
      id: 0,
      name: ScreenConst.ANIMELISTAIRINGSTACK,
      component: AnimeListAiringStackNavigator,
      title: StringConst.Airing,
    },
    {
      id: 0,
      name: ScreenConst.ANIMELISTCOMPLETESTACK,
      component: AnimeListCompletedStackNavigator,
      title: StringConst.Completed,
    },
    {
      id: 0,
      name: ScreenConst.ANIMELISTUPCOMINGTSTACK,
      component: AnimeListUpcomingStackNavigator,
      title: StringConst.Upcoming,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomBottomTabBar {...props} />}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          initialParams={{
            title: item?.title,
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
}
