import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {AnimeListItem, ButtonWithImage, Loader} from '../../components';
import {ColorConst, ImageConst} from '../../const';
import {SizeClass} from '../../utils/AppTheme';

export default function AnimeListDetail(props) {
  const {detail, isLoading} = props;
  return (
    <View style={styles.container}>
      <Header title={'Home'} showBack={true} />
      <ScrollView>
        {isLoading ? (
          <Loader />
        ) : (
          detail && (
            <>
              <AnimeListItem item={detail} />
              <Text style={styles.descriptionStyle}>{detail?.synopsis}</Text>
            </>
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: ColorConst.white},
  descriptionStyle: {
    fontSize: SizeClass.scaleFont(18),
    marginHorizontal: SizeClass.LARGE_MARGIN,
  },
});
