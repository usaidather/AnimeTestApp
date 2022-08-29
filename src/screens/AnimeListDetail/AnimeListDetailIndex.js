import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import AnimeListDetail from './AnimeListDetail';
import {getAnimeById} from '../../services/APIS/AnimeAPI';

export default function AnimeListDetailIndex(props) {
  const {id} = props?.route?.params;
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAnimeById(id)
      .then(response => {
        setDetail(response?.data?.data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
      });
  }, []);

  return <AnimeListDetail detail={detail} {...props} />;
}

const styles = StyleSheet.create({});
