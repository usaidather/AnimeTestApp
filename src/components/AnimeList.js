import {StyleSheet, View, FlatList, TextInput} from 'react-native';
import React, {useState, useCallback} from 'react';
import {ColorConst, StringConst} from '../const';
import {SizeClass} from '../utils/AppTheme';
import {AnimeListItem, Loader, EmptyView} from '.';

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

  // to add delay in to search textfield keys press.
  const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  };

  // delaying of 0.8 sec to call api on main calling class from where this is called.
  const debouncedHandler = useCallback(
    debounce(text => {
      onSearchKeyPress(text);
    }, 800),
    [],
  );

  // render function of list item...
  const renderItem = ({item}) => <AnimeListItem item={item} />;

  // render search view with search text input.
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

  // generic Anime list view...
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
