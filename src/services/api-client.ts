import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "115cdc659030439e857ecb75ef11f966",
  },
});
