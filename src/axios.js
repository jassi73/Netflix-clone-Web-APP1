import axios from "axios";

/*base url to get movie requests from database*/

const instance = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
});

export default instance;
