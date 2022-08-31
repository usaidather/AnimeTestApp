import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenConst from '../const/ScreenConst';
import FavouriteAnimeList from '../screens/FavouriteAnimeList/FavouriteAnimeListIndex';
import AnimeDetailScreen from '../screens/AnimeListDetail/AnimeListDetailIndex';
import BottomTabStack from './BottomTabStack';
import {ColorConst} from '../const';
import {SizeClass} from '../utils/AppTheme';

//Drawer stack
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: ColorConst.themeColor,
        drawerActiveTintColor: ColorConst.white,
        drawerInactiveTintColor: ColorConst.themeColor,
        drawerActiveBackgroundColor: ColorConst.themeColor,
        drawerItemStyle: {
          borderRadius: SizeClass.SCREEN_HEIGHT / 3,
          paddingHorizontal: SizeClass.LARGE_MARGIN,
        },
        drawerStyle: {
          backgroundColor: ColorConst.white,
        },
      }}>
      <Drawer.Screen
        name={ScreenConst.ANIMEBOTTOMTAB}
        component={BottomTabStack}
      />
      <Drawer.Screen
        name={ScreenConst.FAVOURITEANIMELIST}
        component={FavouriteAnimeList}
      />
    </Drawer.Navigator>
  );
}
