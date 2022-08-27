import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenConst} from '../../const';

export default function AnimeListAiring(props) {
  return (
    <View>
      <SafeAreaView>
        <Button
          title="Detail Screen"
          onPress={() => {
            props.navigation.navigate(ScreenConst.ANIMELISTDETAIL);
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
