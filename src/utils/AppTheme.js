import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {ColorConst} from '../constants';

export const SizeClass = (function Size() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const WINDOW_HEIGHT = Dimensions.get('window').height;

  const DEFAULT_MARGIN = SCREEN_WIDTH * 0.05;
  const SMALL_MARGIN = SCREEN_WIDTH * 0.02;
  const LARGE_MARGIN = SCREEN_WIDTH * 0.06;

  const getScreenWidthFromPercentage = percentageValue => {
    return (percentageValue / 100) * SCREEN_WIDTH;
  };

  const getScreenHeightFromPercentage = percentageValue => {
    return (percentageValue / 100) * SCREEN_HEIGHT;
  };

  const scaleFont = size => RFValue(size);

  commonstyles = {
    // container: {
    //   flex: 1,
    //   backgroundColor: ColorConst.white,
    // },
  };

  return {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    WINDOW_HEIGHT,
    DEFAULT_MARGIN,
    SMALL_MARGIN,
    LARGE_MARGIN,
    getScreenWidthFromPercentage,
    getScreenHeightFromPercentage,
    scaleFont,
    commonstyles,
  };
})();
