import axios from "axios";
import env from "./config.js";

const userRequest = axios.create({
  baseURL: env.api_url,
});

export default userRequest;
