import React, {useEffect, useState} from 'react';
import {getAnimeList} from '../../services/APIS/AnimeAPI';
import {StyleSheet, Text, View} from 'react-native';
import AnimeListUpcoming from './AnimeListUpcoming';

// all the business logic of this screen...
export default function AnimeListUpcomingIndex(props) {
  const [response, setResponse] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const FILTER = 'upcoming';
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
      console.log(text);
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
    <AnimeListUpcoming
      isLoading={isLoading}
      anime={animeList}
      onEndReached={onEndReached}
      isLoadingMore={isLoadingMore}
      onSearchKeyPress={onSearchKeyPress}
      {...props}></AnimeListUpcoming>
  );
}

const styles = StyleSheet.create({});
