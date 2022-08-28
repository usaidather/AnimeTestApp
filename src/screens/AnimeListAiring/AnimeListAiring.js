import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColorConst, ScreenConst, StringConst} from '../../const';
import {Header, AnimeList} from '../../components/';

export default function AnimeListAiring(props) {
  return (
    <View style={{backgroundColor: ColorConst.white, flex: 1}}>
      <Header title={StringConst.Anime} />
      <AnimeList />
    </View>
  );
}

const styles = StyleSheet.create({});
