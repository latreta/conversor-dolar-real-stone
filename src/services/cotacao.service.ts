import cotacaoApi from "./api/cotacao.api";

export function GetCotacao() {
  return cotacaoApi.get("/");
}
