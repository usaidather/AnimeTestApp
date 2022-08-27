import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenConst, StringConst} from '../const';
import CustomBottomTabBar from './CustomBottomTabBar';
import AnimeListAiring from '../screens/AnimeListAiring/AnimeListAiringIndex';
import AnimeListComplete from '../screens/AnimeListComplete/AnimeListCompleteIndex';
import AnimeListUpcoming from '../screens/AnimeListUpcoming/AnimeListUpcomingIndex';

const Tab = createBottomTabNavigator();

export default function BottomTabStack() {
  const tabs = [
    {
      id: 0,
      name: ScreenConst.ANIMELISTAIRING,
      component: AnimeListAiring,
      title: StringConst.Airing,
    },
    {
      id: 0,
      name: ScreenConst.ANIMELISTCOMPLETE,
      component: AnimeListComplete,
      title: StringConst.Completed,
    },
    {
      id: 0,
      name: ScreenConst.ANIMELISTUPCOMING,
      component: AnimeListUpcoming,
      title: StringConst.Upcoming,
    },
  ];

  return (
    <Tab.Navigator tabBar={props => <CustomBottomTabBar {...props} />}>
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
