import produce from "immer";

export default function posts(state = [], action) {
  switch (action.type) {
    case "@posts/SUCCESS":
      return [...state, ...action.posts];
    case "@posts/ADD":
      return [...state, action.post];

    case "@posts/DELETE":
      return produce(state, draft => {
        const postIndex = draft.findIndex(p => p.id === action.id);

        if (postIndex >= 0) {
          draft.splice(postIndex, 1);
        }
      });
    default:
      return state;
  }
}
