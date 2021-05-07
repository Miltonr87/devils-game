import axios from "axios";

const api_key = "167f06942781408ea12a369d433ce99b";

const api = axios.create({
  baseURL: "https://api.rawg.io/api/games?",
  params: {
    api_key: api_key,
  },
});

export default api;
