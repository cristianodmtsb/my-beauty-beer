export function addFavorite(beer) {
  return {
    type: "ADD_FAVORITE",
    beer
  };
}

export function removeFavorite(id) {
  return { type: "REMOVE_FAVORITE", id };
}
