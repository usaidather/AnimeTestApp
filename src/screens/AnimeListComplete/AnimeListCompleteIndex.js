import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimeListComplete from './AnimeListComplete';
import {getAnimeList} from '../../services/APIS/AnimeAPI';

export default function AnimeListCompleteIndex(props) {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const FILTER = 'complete';

  useEffect(() => {
    setIsLoading(true);
    getAnimeList(1, FILTER)
      .then(response => {
        if (response.status === 200) {
          setResponse(response?.data?.data);
          setIsLoading(false);
        }
      })
      .catch(error => {
        alert(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <AnimeListComplete
      isLoading={isLoading}
      anime={response}
      {...props}></AnimeListComplete>
  );
}

const styles = StyleSheet.create({});
