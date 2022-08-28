import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {SizeClass} from '../utils/AppTheme';
import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {ColorConst, ImageConst} from '../const';
import ButtonWithImage from './ButtonWithImage';
import {useNavigation} from '@react-navigation/core';

export default function CustomHeader(props) {
  const {title} = props;
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <View>
      <View
        style={{
          height: headerHeight,
          flexDirection: 'row',
          backgroundColor: ColorConst.themeColor,
          paddingTop: insets.top,
        }}>
        <View style={styles.leftItemContainer}>
          {navigation.canGoBack() ? (
            <ButtonWithImage
              IconStyle={styles.icon}
              icon={ImageConst.back}
              onPress={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }}
            />
          ) : (
            <ButtonWithImage
              IconStyle={styles.icon}
              icon={ImageConst.menu}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.headerTitleStyle(0), {textAlign: 'center'}]}>
            {title}
          </Text>
        </View>
        <View style={styles.rightItemContainer}></View>
      </View>
      <View style={styles.lineSeparator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftItemContainer: {
    width: SizeClass.getScreenWidthFromPercentage(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightItemContainer: {
    width: SizeClass.getScreenWidthFromPercentage(20),
    justifyContent: 'center',
  },
  headerTitleStyle: top => ({
    fontSize: SizeClass.scaleFont(17),
    marginTop: top,
    color: ColorConst.themeYellow,
  }),
  icon: {
    width: SizeClass.getScreenWidthFromPercentage(6),
    height: SizeClass.getScreenHeightFromPercentage(6),
  },
  titleContainer: {
    width: SizeClass.getScreenWidthFromPercentage(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineSeparator: {
    width: SizeClass.SCREEN_WIDTH,
    height: 0.5,
    backgroundColor: ColorConst.themeYellow,
  },
});
