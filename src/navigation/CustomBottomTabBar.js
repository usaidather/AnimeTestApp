import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ColorConst} from '../const';
import {SizeClass} from '../utils/AppTheme';

// Custom bottom tabbar...
export default function CustomBottomTabBar({
  state,
  descriptors,
  navigation,
  ...props
}) {
  return (
    <View style={styles.tabBarContainer} {...props}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;
          const {title} = route.params;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              activeOpacity={1}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarItem(isFocused)}>
              <View style={styles.tabItemContainer}>
                <View>
                  <Text style={styles.tabItemTitle(isFocused)}>{title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabItemTitle: isFocused => ({
    color: isFocused ? ColorConst.themeYellow : ColorConst.themeColor,
  }),
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarItem: isFocused => ({
    flex: 1,
    backgroundColor: isFocused ? ColorConst.themeColor : null,
    borderRadius: SizeClass.LARGE_MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
    height: SizeClass.SCREEN_HEIGHT * 0.05,
    marginHorizontal: SizeClass.SMALL_MARGIN,
  }),
  tabBarContainer: {
    height: SizeClass.SCREEN_HEIGHT * 0.1,
    paddingHorizontal: SizeClass.DEFAULT_MARGIN,
    justifyContent: 'center',
    paddingBottom: SizeClass.DEFAULT_MARGIN,
    backgroundColor: ColorConst.white,
    paddingTop: 10,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: ColorConst.themeYellow,
    paddingVertical: SizeClass.SCREEN_HEIGHT * 0.01,
    borderRadius: 4 * SizeClass.LARGE_MARGIN,
    borderWidth: 1,
  },
});
