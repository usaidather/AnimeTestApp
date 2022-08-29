import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColorConst, ScreenConst, StringConst} from '../../const';
import {Header, AnimeList} from '../../components/';

export default function AnimeListAiring(props) {
  const {anime, onEndReached, isLoading, isLoadingMore} = props;

  return (
    <View style={styles.container}>
      <Header title={StringConst.Anime} />
      <AnimeList
        isLoading={isLoading}
        data={anime}
        onEndReached={onEndReached}
        isLoadingMore={isLoadingMore}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: ColorConst.white, flex: 1},
});
