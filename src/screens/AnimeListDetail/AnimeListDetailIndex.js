import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import AnimeListDetail from './AnimeListDetail';
import {getAnimeById} from '../../services/APIS/AnimeAPI';

// buisness logic
export default function AnimeListDetailIndex(props) {
  const {item} = props?.route?.params;
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAnimeById(item?.mal_id)
      .then(response => {
        // adding favourite value manually as this is not from the api.
        setDetail({
          ...response?.data?.data,
          favourite: item?.favourite,
        });
        r;

        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
      });
  }, []);

  return <AnimeListDetail isLoading={isLoading} detail={detail} {...props} />;
}

const styles = StyleSheet.create({});
