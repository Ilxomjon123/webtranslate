import axios from "axios";
import {ref, reactive} from 'vue';

export default function useRequest(url, data = {}) {
  const get = () => {
    try {
      const res = axios.get(url, { params: data });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const post = () => {
    try {
      const res = axios.post(url, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    get,
    post,
  };
}
