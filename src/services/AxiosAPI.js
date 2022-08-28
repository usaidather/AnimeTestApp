import axios from 'axios';
import {
  requestErrorHandler,
  requestInterceptor,
  responseErrorHandler,
  responseInterceptor,
} from './AxiosHelperMethods';
import Config from 'react-native-config';

const baseURL = Config.BASEURL;
const axiosAPI = axios.create({
  baseURL: baseURL,
});

axiosAPI.interceptors.request.use(requestInterceptor, requestErrorHandler);
axiosAPI.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default axiosAPI;
