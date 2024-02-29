import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b403a91f9ac245a3af0cabd313f530a6",
  },
});
