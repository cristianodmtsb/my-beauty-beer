import produce from "immer";

export default function favorite(state = [], action) {
  switch (action.type) {
    case "@favorite/ADD_SUCCESS":
      return produce(state, draft => {
        const { beer } = action;

        draft.push(...beer);
      });
    case "REMOVE_FAVORITE":
      return produce(state, draft => {
        const favIndex = draft.findIndex(p => p.id === action.id);

        if (favIndex >= 0) {
          draft.splice(favIndex, 1);
        }
      });
    default:
      return state;
  }
}
