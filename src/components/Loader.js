import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {SizeClass} from '../utils/AppTheme';
import {ColorConst} from '../const';

export default function Loader(props) {
  const {isLoading} = props;
  return (
    <View>
      <ActivityIndicator
        animating={isLoading}
        hidesWhenStopped={true}
        size={'large'}
        color={ColorConst.themeYellow}
        style={{marginTop: SizeClass.DEFAULT_MARGIN}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
