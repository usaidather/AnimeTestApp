import React, {useEffect, useState} from 'react';
import {getAnimeList} from '../../services/APIS/AnimeAPI';
import {StyleSheet, Text, View} from 'react-native';
import AnimeListUpcoming from './AnimeListUpcoming';

export default function AnimeListUpcomingIndex(props) {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const FILTER = 'upcoming';

  useEffect(() => {
    setIsLoading(false);
    getAnimeList(1, FILTER)
      .then(response => {
        if (response.status === 200) {
          setResponse(response?.data?.data);
          setIsLoading(true);
        }
      })
      .catch(error => {
        alert(error);
        setIsLoading(true);
      });
  }, []);

  return (
    <AnimeListUpcoming
      isLoading={isLoading}
      anime={response}
      {...props}></AnimeListUpcoming>
  );
}

const styles = StyleSheet.create({});
