export const requestInterceptor = config => {
  const accessToken = '';

  // if (accessToken != null) {
  //   config.headers['x-auth'] = accessToken;
  // }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  config.headers['Accept'] = 'application/json';

  console.log('Headers:', config.headers);
  console.log('Method:', config.method);
  console.log('URL: ', config.baseURL + config.url);

  return config;
};

// const callRefreshToken = () =>{
//     return new instance of axios.post().then
// }

export const responseInterceptor = config => {
  console.log('REQUEST...');
  console.log('Headers: ', config.config.headers);
  console.log('Method: ', config.config.method);
  console.log('URL: ', config.config.baseURL + config.config.url);

  console.log('RESPONSE...');
  console.log('Status:', config.status);
  console.log('Response', config.data);

  return config;
};

export const responseErrorHandler = error => {
  const orignalConfig = error.config;

  if (error?.response?.status === 401 && !orignalConfig._retry) {
    console.log('User is unauthorized....');

    // return refreshTokeAPICall()
  }

  alert(error);

  return Promise.reject(error);
};

export const requestErrorHandler = error => {
  return Promise.reject(error);
};
