import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimeListComplete from './AnimeListComplete';
import {getAnimeList} from '../../services/APIS/AnimeAPI';

export default function AnimeListCompleteIndex(props) {
  const [response, setResponse] = useState([]);
  const FILTER = 'complete';

  useEffect(() => {
    getAnimeList(1, FILTER)
      .then(response => {
        if (response.status === 200) {
          setResponse(response?.data?.data);
        }
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  return <AnimeListComplete anime={response} {...props}></AnimeListComplete>;
}

const styles = StyleSheet.create({});
