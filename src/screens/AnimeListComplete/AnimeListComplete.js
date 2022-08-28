import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Header, AnimeList} from '../../components/';
import {ColorConst, ScreenConst, StringConst} from '../../const';

export default function AnimeListComplete(props) {
  const {anime} = props;
  return (
    <View style={styles.container}>
      <Header title={StringConst.Anime} />
      <AnimeList data={anime} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {backgroundColor: ColorConst.white, flex: 1},
});
