import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fabb0e8b8dbb4e1f935717dc9e5f8050",
  },
});
