import React from 'react';
import {StyleSheet, TouchableOpacity, View, Platform} from 'react-native';
import {SizeClass} from '../utils/AppTheme';
import FastImage from 'react-native-fast-image';

export default function ButtonWithImage(props) {
  const {onPress, icon, IconStyle} = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress} {...props}>
        <View style={styles.leftIconContainer}>
          <FastImage
            resizeMode={'contain'}
            style={[styles.icon, IconStyle]}
            source={icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  leftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SizeClass.SMALL_MARGIN,
  },
  icon: {
    height: SizeClass.getScreenWidthFromPercentage(5),
    width: SizeClass.getScreenWidthFromPercentage(5),
  },
});
