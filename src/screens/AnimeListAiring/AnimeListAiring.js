import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColorConst, ScreenConst, StringConst} from '../../const';
import {Header, AnimeList} from '../../components/';

// UI component of the screen.
export default function AnimeListAiring(props) {
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
