import axiosAPI from '../AxiosAPI';

export const getAnimeList = (page, airing, pageLimit = 25) => {
  return axiosAPI.get(
    `/v4/anime?page=${page}&status=${airing}&limit=${pageLimit}`,
  );
};
