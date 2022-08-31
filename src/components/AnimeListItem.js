import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SizeClass} from '../utils/AppTheme';
import {ColorConst, ImageConst, ScreenConst} from '../const';
import {ButtonWithImage, FastImage} from '.';
import {markFavourite, unMarkFavourite} from '../redux/FavouriteSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

// ANIME FLAT LIST ITEM.
export default function AnimeListItem(props) {
  let {item} = props;

  const [listItem, setListItem] = useState(item);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // on press of list item.
  const onPress = () => {
    navigation.navigate(ScreenConst.ANIMELISTDETAIL, {item: listItem});
  };

  // to mark fav/unfav item.
  const onPressMarkUnMarkFavourite = item => {
    let favouriteItem = item;
    setListItem({
      ...favouriteItem,
      favourite:
        favouriteItem?.favorite != null ? !favouriteItem?.favorite : true,
    });

    // handling it through redux...
    if (item?.favourite) {
      dispatch(unMarkFavourite(favouriteItem));
    } else {
      dispatch(markFavourite(listItem));
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={styles.item}>
        <FastImage
          imageStyle={styles.itemImage}
          cover
          source={{
            uri: listItem?.images?.jpg?.large_image_url,
          }}
        />

        <View style={styles.itemTitleContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {listItem?.title}
          </Text>
          {listItem?.year && (
            <View style={styles.itemYearContainer}>
              <Text style={styles.year}>{listItem?.year}</Text>
            </View>
          )}
        </View>
        {listItem?.rating && (
          <View style={styles.itemRatingContainer}>
            <FastImage
              imageStyle={styles.icon}
              cover
              source={ImageConst.pgRatingIcon}
            />
            <Text>{listItem?.rating}</Text>
          </View>
        )}

        {listItem?.score && (
          <View style={styles.itemScoreContainer}>
            <FastImage
              imageStyle={styles.icon}
              cover
              source={ImageConst.scoreIcon}
            />
            <Text
              style={{fontWeight: 'bold', fontSize: SizeClass.scaleFont(15)}}>
              {listItem?.score}
            </Text>
          </View>
        )}
        <View style={styles.favContainer}>
          <ButtonWithImage
            icon={listItem?.favourite ? ImageConst.fav : ImageConst.unfav}
            IconStyle={{
              width: SizeClass.LARGE_MARGIN,
              height: SizeClass.LARGE_MARGIN,
            }}
            onPress={() => {
              onPressMarkUnMarkFavourite(listItem);
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    // backgroundColor: ColorConst.white,
    borderRadius: SizeClass.DEFAULT_MARGIN,
    // padding: SizeClass.DEFAULT_MARGIN,
    marginVertical: SizeClass.SMALL_MARGIN,
    marginHorizontal: SizeClass.DEFAULT_MARGIN,
  },
  title: {
    fontSize: SizeClass.scaleFont(18),
    color: ColorConst.black,
    marginVertical: SizeClass.DEFAULT_MARGIN,
    marginRight: SizeClass.SMALL_MARGIN,
    fontWeight: 'bold',
  },
  year: {
    fontSize: SizeClass.scaleFont(18),
    color: ColorConst.white,
  },
  itemImage: {
    width: '100%',
    height: SizeClass.SCREEN_HEIGHT / 4,
    borderRadius: SizeClass.DEFAULT_MARGIN,
  },
  icon: {
    width: SizeClass.LARGE_MARGIN,
    height: SizeClass.LARGE_MARGIN,
    marginRight: SizeClass.SMALL_MARGIN,
  },
  itemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemYearContainer: {
    backgroundColor: ColorConst.themeColor,
    paddingHorizontal: SizeClass.SMALL_MARGIN,
    paddingVertical: SizeClass.SMALL_MARGIN,
    borderRadius: SizeClass.SMALL_MARGIN,
  },
  itemScoreContainer: {
    backgroundColor: ColorConst.white,
    position: 'absolute',
    top: SizeClass.LARGE_MARGIN,
    left: SizeClass.LARGE_MARGIN,
    paddingHorizontal: SizeClass.DEFAULT_MARGIN,
    paddingVertical: SizeClass.SMALL_MARGIN,
    borderRadius: SizeClass.LARGE_MARGIN,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favContainer: {
    position: 'absolute',
    top: SizeClass.LARGE_MARGIN,
    right: SizeClass.LARGE_MARGIN,
    backgroundColor: ColorConst.white,
    paddingVertical: SizeClass.SMALL_MARGIN,
    borderRadius: SizeClass.LARGE_MARGIN,
  },
  itemRatingContainer: {
    backgroundColor: ColorConst.themeYellow,
    marginBottom: SizeClass.DEFAULT_MARGIN,
    paddingHorizontal: SizeClass.DEFAULT_MARGIN,
    paddingVertical: SizeClass.SMALL_MARGIN,
    borderRadius: SizeClass.LARGE_MARGIN,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
