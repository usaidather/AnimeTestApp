import React, {useEffect, useState} from 'react';
import {getAnimeList} from '../../services/APIS/AnimeAPI';
import {StyleSheet, Text, View} from 'react-native';
import AnimeListUpcoming from './AnimeListUpcoming';

export default function AnimeListUpcomingIndex(props) {
  const [response, setResponse] = useState([]);
  const FILTER = 'upcoming';

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

  return <AnimeListUpcoming anime={response} {...props}></AnimeListUpcoming>;
}

const styles = StyleSheet.create({});
