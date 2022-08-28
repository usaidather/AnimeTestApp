import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {ColorConst, ImageConst} from '../const/';

export default function CustomFastImage(props) {
  const {imageStyle, containerStyle} = props;
  const [isLoading, setIsLoading] = useState(true);

  const renderImage = source => {
    if (source?.uri === null || source?.uri === '') {
      return ImageConst.placeHolder;
    } else {
      return source;
    }
  };
  return (
    <View
      style={[
        {
          justifyContent: 'center',
        },
        containerStyle,
      ]}>
      <FastImage
        style={[{width: 200, height: 200}, imageStyle]}
        resizeMode={
          props.cover
            ? FastImage.resizeMode.cover
            : props.stretch
            ? FastImage.resizeMode.stretch
            : FastImage.resizeMode.contain
        }
        {...props}
        source={renderImage(props?.source)}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}></FastImage>
      <ActivityIndicator
        color={ColorConst.themeYellow}
        animating={isLoading}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      />
    </View>
  );
}
