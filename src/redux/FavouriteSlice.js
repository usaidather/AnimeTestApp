import {createSlice} from '@reduxjs/toolkit';
import {FAVCONST} from './FavAnimeConst';

export const favouriteSlice = createSlice({
  name: FAVCONST.FAV_REDUCER_NAME,
  initialState: {
    favourites: [],
  },
  reducers: {
    markFavourite: (state, action) => {
      let favourite = {
        ...action.payload,
        favourite:
          action.payload?.favorite != null ? !action.payload?.favorite : true,
      };
      let favourites = [{...favourite}, ...state.favourites];
      state.favourites = favourites;
    },

    unMarkFavourite: (state, action) => {
      let id = action.payload?.mal_id;
      const filteredFav = state.favourites.filter(
        favourite => favourite.mal_id != id,
      );

      state.favourites = filteredFav;
    },
  },
});

export const {markFavourite, unMarkFavourite} = favouriteSlice.actions;
export const favourites = state => {
  return state.favourites.favourites;
};

export default favouriteSlice.reducer;
