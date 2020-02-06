export function addFavoriteRequest(id) {
  return {
    type: "@favorite/ADD_REQUEST",
    id
  };
}
export function addFavoriteSuccess(beer) {
  return {
    type: "@favorite/ADD_SUCCESS",
    beer
  };
}

export function removeFavorite(id) {
  return { type: "REMOVE_FAVORITE", id };
}
