import axiosAPI from '../AxiosAPI';

export const getAnimeList = (page, airing, pageLimit = 25, searchQuery) => {
  return axiosAPI.get(
    `/v4/anime?page=${page}&status=${airing}&limit=${pageLimit}&q=${searchQuery}`,
  );
};

export const getAnimeById = id => {
  return axiosAPI.get(`/v4/anime/${id}/full`);
};
