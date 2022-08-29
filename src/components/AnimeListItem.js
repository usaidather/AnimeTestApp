import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SizeClass} from '../utils/AppTheme';
import {ColorConst, ImageConst} from '../const';
import {ButtonWithImage, FastImage} from '.';

export default function AnimeListItem(props) {
  const {item} = props;
  return (
    <View style={styles.item}>
      <FastImage
        imageStyle={styles.itemImage}
        cover
        source={{
          uri: item?.images?.jpg?.large_image_url,
        }}
      />

      <View style={styles.itemTitleContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {item?.title}
        </Text>
        {item?.year && (
          <View style={styles.itemYearContainer}>
            <Text style={styles.year}>{item?.year}</Text>
          </View>
        )}
      </View>
      {item?.rating && (
        <View style={styles.itemRatingContainer}>
          <FastImage
            imageStyle={styles.icon}
            cover
            source={ImageConst.pgRatingIcon}
          />
          <Text>{item?.rating}</Text>
        </View>
      )}

      {item?.score && (
        <View style={styles.itemScoreContainer}>
          <FastImage
            imageStyle={styles.icon}
            cover
            source={ImageConst.scoreIcon}
          />
          <Text style={{fontWeight: 'bold', fontSize: SizeClass.scaleFont(15)}}>
            {item?.score}
          </Text>
        </View>
      )}
      <View style={styles.favContainer}>
        <ButtonWithImage
          icon={item?.isFavourite ? ImageConst.fav : ImageConst.unfav}
          IconStyle={{
            width: SizeClass.LARGE_MARGIN,
            height: SizeClass.LARGE_MARGIN,
          }}
        />
      </View>
    </View>
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
