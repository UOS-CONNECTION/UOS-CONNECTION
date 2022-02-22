import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const getHeader = () => {
  return {
    withCredentials: true,
  };
};

class RequestAPI {
  get(path: string): Promise<any> {
    return axios.get(`${baseUrl}${path}`, getHeader());
  }

  post(path: string, body: any): Promise<any> {
    return axios.post(`${baseUrl}${path}`, body, getHeader());
  }
}

const requestAPI = new RequestAPI();

export default requestAPI;
