import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenConst from '../const/ScreenConst';
import FavouriteAnimeList from '../screens/FavouriteAnimeList/FavouriteAnimeListIndex';
import AnimeDetailScreen from '../screens/AnimeListDetail/AnimeListDetailIndex';
import BottomTabStack from './BottomTabStack';
import {ColorConst} from '../const';
import {SizeClass} from '../utils/AppTheme';
import AnimeListDetail from '../screens/AnimeListDetail/AnimeListDetailIndex';

//Drawer stack
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function DrawerStack() {
  const FavouriteNavigationStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={ScreenConst.FAVOURITEANIMELIST}
          component={FavouriteAnimeList}
        />
        <Stack.Screen
          name={ScreenConst.ANIMELISTDETAIL}
          component={AnimeListDetail}
        />
      </Stack.Navigator>
    );
  };

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
        name={ScreenConst.FAVSTACK}
        component={FavouriteNavigationStack}
      />
    </Drawer.Navigator>
  );
}
