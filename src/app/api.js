import axios from 'axios'

const httpClient = axios.create({


   baseURL: 'http://172.20.10.2:8080'

});

class Api {

  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  post(url, object, config) {
    const requestUrl = `${this.apiUrl}${url}`
    return httpClient.post(requestUrl, object, config);
  }

  put(url, object) {
    const requestUrl = `${this.apiUrl}${url}`
    return httpClient.put(requestUrl, object);
  }

  delete(url) {
    const requestUrl = `${this.apiUrl}${url}`
    return httpClient.delete(requestUrl);
  }

  get(url) {
    const requestUrl = `${this.apiUrl}${url}`
    return httpClient.get(requestUrl);
  }
}

export default Api;