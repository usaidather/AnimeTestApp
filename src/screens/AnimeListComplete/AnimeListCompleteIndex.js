import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimeListComplete from './AnimeListComplete';
import {getAnimeList} from '../../services/APIS/AnimeAPI';

export default function AnimeListCompleteIndex(props) {
  const [response, setResponse] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const FILTER = 'complete';
  const ITEM_LIMIT = 10;

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      callAnimeListAPI();
    }
  }, []);

  const onEndReached = () => {
    if (response?.pagination?.has_next_page) {
      setIsLoadingMore(true);
      callAnimeListAPI();
    }
  };

  const callAnimeListAPI = () => {
    getAnimeList(page, FILTER, ITEM_LIMIT)
      .then(response => {
        if (response.status === 200) {
          setResponse(response?.data);
          let array = [...animeList, ...response?.data?.data];
          setAnimeList(array);

          setPage(page + 1);

          setIsLoading(false);
          setIsLoadingMore(true);
        }
      })
      .catch(error => {
        alert(error);
        setIsLoading(false);
        setIsLoadingMore(true);
      });
  };

  return (
    <AnimeListComplete
      isLoading={isLoading}
      anime={animeList}
      onEndReached={onEndReached}
      isLoadingMore={isLoadingMore}
      {...props}></AnimeListComplete>
  );
}

const styles = StyleSheet.create({});
