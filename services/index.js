import axios from "axios";
import { AsyncStorage } from "react-native";

export default async function api({ method, data, url }) {
/*   const token = await AsyncStorage.getItem("token"); */
  return axios({
    baseURL: "https://miapi.com",
    method,
    data,
    url,
    headers: {
      token,
    },
  });
}
