import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, AnimeList} from '../../components/';
import {ColorConst, StringConst} from '../../const';

// UI Component of the screen.
export default function AnimeListUpcoming(props) {
  const {anime, onEndReached, isLoading, isLoadingMore, onSearchKeyPress} =
    props;
  return (
    <View style={styles.container}>
      <Header title={StringConst.Anime} />
      <AnimeList
        isLoading={isLoading}
        data={anime}
        onEndReached={onEndReached}
        isLoadingMore={isLoadingMore}
        onSearchKeyPress={onSearchKeyPress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {backgroundColor: ColorConst.white, flex: 1},
});
