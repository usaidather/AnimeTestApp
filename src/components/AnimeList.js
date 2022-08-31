import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {ColorConst, ImageConst, ScreenConst, StringConst} from '../const';
import {SizeClass} from '../utils/AppTheme';
import {FastImage, AnimeListItem, Loader, EmptyView} from '.';
// import {debounce} from 'lodash';

export default function AnimeList(props) {
  const {
    data,
    onEndReached,
    isLoading,
    isLoadingMore,
    onSearchKeyPress,
    hideSearchBar,
  } = props;
  const [search, setSearch] = useState('');

  const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  };

  const debouncedHandler = useCallback(
    debounce(text => {
      onSearchKeyPress(text);
    }, 800),
    [],
  );

  const renderItem = ({item}) => <AnimeListItem item={item} />;

  const renderSearchViewInList = () => {
    return (
      <View style={styles.searchFieldContainer}>
        <TextInput
          placeholderTextColor={'gray'}
          style={styles.searchField}
          onChangeText={text => {
            if (!isLoading) {
              setSearch(text);
              debouncedHandler(text);
            }
          }}
          placeholder={StringConst.search}
          value={search}></TextInput>
      </View>
    );
  };

  return (
    <View style={{flex: 1, paddingVertical: SizeClass.SMALL_MARGIN}}>
      {!hideSearchBar && renderSearchViewInList()}
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <FlatList
          removeClippedSubviews={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item?.mal_id}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          ListFooterComponent={
            isLoadingMore ? <Loader isLoading={isLoadingMore} /> : null
          }
          ListEmptyComponent={<EmptyView />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchFieldContainer: {
    height: 1.8 * SizeClass.LARGE_MARGIN,
    width: '90%',
    backgroundColor: ColorConst.searchView,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: (1.8 * SizeClass.LARGE_MARGIN) / 2,
    marginVertical: SizeClass.SMALL_MARGIN,
  },
  searchField: {
    width: '90%',
    height: 1.8 * SizeClass.LARGE_MARGIN,
    marginHorizontal: SizeClass.LARGE_MARGIN,
    color: ColorConst.black,
  },
});
