import axios from "axios";

//TODO: Extract to .env
const COTACAO_API_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

const api = axios.create({
  baseURL: COTACAO_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
