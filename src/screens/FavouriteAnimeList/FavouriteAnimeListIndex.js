import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FavouriteAnimeList from './FavouriteAnimeList';
import {favourites} from '../../redux/FavouriteSlice';
import {useSelector} from 'react-redux';

export default function FavouriteAnimeListIndex(props) {
  const favouritesState = useSelector(favourites);

  return (
    <FavouriteAnimeList anime={favouritesState} {...props}></FavouriteAnimeList>
  );
}

const styles = StyleSheet.create({});
