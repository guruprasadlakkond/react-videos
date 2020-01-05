import axios from "axios";

const KEY = "";
export default axios.create({
  baseURL: "",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video"
  }
});
