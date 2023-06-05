import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bbee3c517ada4ebb92c31d2a69bba687",
  },
});
