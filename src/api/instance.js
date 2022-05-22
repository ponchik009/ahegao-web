import { Http } from "@mui/icons-material";
import trueAxios from "axios";

export const axios = trueAxios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/',
});
