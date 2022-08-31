import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimeListAiring from './AnimeListAiring';
import {getAnimeList} from '../../services/APIS/AnimeAPI';

// to handle all the business logics
export default function AnimeListAiringIndex(props) {
  const [response, setResponse] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const FILTER = 'airing';
  const ITEM_LIMIT = 10;

  useEffect(() => {
    if (!isLoading && !isLoadingMore) {
      setIsLoading(true);
      callAnimeListAPI(page, FILTER, ITEM_LIMIT, searchQuery);
    }
  }, []);

  // handling search of anime lists
  const onSearchKeyPress = text => {
    if (!isLoading && !isLoadingMore) {
      setResponse(null);
      setAnimeList([]);
      setPage(1);
      setSearchQuery(text);
      setIsLoading(true);
      callAnimeListAPI(page, FILTER, ITEM_LIMIT, text);
    }
  };

  // hanlding pagination ...
  const onEndReached = () => {
    if (!isLoading && !isLoadingMore && response?.pagination?.has_next_page) {
      setIsLoadingMore(true);
      callAnimeListAPI(page, FILTER, ITEM_LIMIT, searchQuery);
    } else {
      setIsLoadingMore(false);
    }
  };

  // generic api call.
  const callAnimeListAPI = (page, filter, limit, searchQuery) => {
    getAnimeList(page, filter, limit, searchQuery)
      .then(response => {
        if (response.status === 200 && response?.data?.data?.length > 0) {
          setResponse(response?.data);

          let array = [...animeList, ...response?.data?.data];
          setAnimeList(array);

          setPage(page + 1);
        }
        setIsLoading(false);
        setIsLoadingMore(false);
      })
      .catch(error => {
        alert(error);
        setIsLoading(false);
        setIsLoadingMore(false);
      });
  };

  return (
    <AnimeListAiring
      isLoading={isLoading}
      anime={animeList}
      onEndReached={onEndReached}
      isLoadingMore={isLoadingMore}
      onSearchKeyPress={onSearchKeyPress}
      {...props}
    />
  );
}

const styles = StyleSheet.create({});
