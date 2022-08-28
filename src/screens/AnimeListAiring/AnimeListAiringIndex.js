import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimeListAiring from './AnimeListAiring';
import {getAnimeList} from '../../services/APIS/AnimeAPI';

export default function AnimeListAiringIndex(props) {
  const [response, setResponse] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const FILTER = 'airing';
  const ITEM_LIMIT = 10;

  useEffect(() => {
    if (!isLoading) {
      callAnimeListAPI();
    }
  }, []);

  const onEndReached = () => {
    if (response?.pagination?.has_next_page) {
      callAnimeListAPI();
    }
  };

  const callAnimeListAPI = () => {
    setIsLoading(true);
    getAnimeList(page, FILTER, ITEM_LIMIT)
      .then(response => {
        if (response.status === 200) {
          setIsLoading(false);
          setResponse(response?.data);
          let array = [...animeList, ...response?.data?.data];
          setAnimeList(array);

          // if (response?.data?.pagination?.has_next_page) {
          setPage(page + 1);
          // }
        }
      })
      .catch(error => {
        alert(error);
        setIsLoading(false);
      });
  };

  return (
    <AnimeListAiring anime={animeList} onEndReached={onEndReached} {...props} />
  );
}

const styles = StyleSheet.create({});
