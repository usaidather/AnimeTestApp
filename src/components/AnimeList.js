import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {ColorConst} from '../const';
import {SizeClass} from '../utils/AppTheme';
import {FastImage} from '.';

export default function AnimeList() {
  const DATA = [
    {
      title_english:
        'Samurai X: Trust and Betrayal Samurai X: Trust and Betrayal',
      status: 'Finished Airing',
      score: 8.71,
      year: '2021',
    },
    {
      title_english: 'Samurai X: Trust and Betrayal',
      status: 'Finished Airing',
      score: 8.71,
      year: '2022',
    },
    {
      title_english: 'Samurai X:',
      status: 'Finished Airing',
      score: 8.71,
      year: '1993',
    },
    {
      title_english: 'Samurai X: Trust and Betrayal',
      status: 'Finished Airing',
      score: 8.71,
      year: '',
    },
    {
      title_english: 'Samurai X: Trust and Betrayal',
      status: 'Finished Airing',
      score: 8.71,
      year: '',
    },
    {
      title_english: 'Samurai X: Trust and Betrayal',
      status: 'Finished Airing',
      score: 8.71,
      year: '',
    },
    {
      title_english: 'Samurai X: Trust and Betrayal',
      status: 'Finished Airing',
      score: 8.71,
      year: '',
    },
    {
      title_english: 'Samurai X: Trust and Betrayal',
      status: 'Finished Airing',
      score: 8.71,
      year: '',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <FastImage
        imageStyle={styles.itemImage}
        cover
        source={{
          uri: 'https://cdn.myanimelist.net/images/anime/1391/120839.jpg',
        }}
      />
      <View style={styles.itemTitleContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {item?.title_english}
        </Text>
        <View style={styles.itemYearContainer}>
          <Text style={styles.year}>{item?.year}</Text>
        </View>
      </View>
      <View style={styles.itemScoreContainer}>
        <Text>Score</Text>
      </View>

      <View style={styles.itemRatingContainer}>
        <Text>Rating</Text>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, paddingVertical: SizeClass.SMALL_MARGIN}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
  },
  itemRatingContainer: {
    backgroundColor: ColorConst.white,
    position: 'absolute',
    top: SizeClass.LARGE_MARGIN,
    right: SizeClass.LARGE_MARGIN,
    paddingHorizontal: SizeClass.DEFAULT_MARGIN,
    paddingVertical: SizeClass.SMALL_MARGIN,
    borderRadius: SizeClass.LARGE_MARGIN,
  },
});
