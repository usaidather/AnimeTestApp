import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColorConst, ImageConst} from '../const';
import FastImage from 'react-native-fast-image';
import {SizeClass} from '../utils/AppTheme';

export default function EmptyView() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: SizeClass.SCREEN_HEIGHT / 1.5,
      }}>
      <FastImage
        resizeMode="cover"
        style={{
          height: SizeClass.getScreenHeightFromPercentage(40),
          width: SizeClass.getScreenHeightFromPercentage(40),
        }}
        source={ImageConst.emptyData}
      />
      <Text>No data found !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyImage: {
    height: '100%',
    width: '100%',
  },
});
