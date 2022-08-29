import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {ColorConst, ImageConst, ScreenConst} from '../const';
import {SizeClass} from '../utils/AppTheme';
import {FastImage, AnimeListItem, Loader} from '.';
import {useNavigation} from '@react-navigation/core';

export default function AnimeList(props) {
  const navigation = useNavigation();
  const {data, onEndReached, isLoading, isLoadingMore} = props;

  const onPress = item => {
    navigation.navigate(ScreenConst.ANIMELISTDETAIL, {id: item?.mal_id});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        onPress(item);
      }}>
      <AnimeListItem item={item} />
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, paddingVertical: SizeClass.SMALL_MARGIN}}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item?.mal_id}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          ListFooterComponent={
            isLoadingMore ? <Loader isLoading={isLoadingMore} /> : null
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
