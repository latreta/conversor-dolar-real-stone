import api from "./api";

export function GetCotacao() {
  return api.get("/");
}
