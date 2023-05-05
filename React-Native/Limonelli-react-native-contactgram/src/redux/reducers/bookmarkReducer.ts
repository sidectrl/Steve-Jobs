import { Result } from "../../models/Data";
import {
  BOOKMARK_ACTIONS,
  BookmarkAction,
  BookmarkProps,
} from "../actions/bookmarkActions";

const initialState: BookmarkProps = {
  bookmarks: [],
};

const bookmarkReducer = (state = initialState, action: BookmarkAction) => {
  switch (action.type) {
    case BOOKMARK_ACTIONS.ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter(
            (item) => item.id !== (action.payload as Result).id
          ),
          action.payload,
        ],
      };
    case BOOKMARK_ACTIONS.REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter(
            (item) => item.id.name !== (action.payload as string)
          ),
        ],
      };
    case BOOKMARK_ACTIONS.REMOVE_ALL_BOOKMARK:
      return {
        bookmarks: [],
      };
    default:
      return state;
  }
};
export default bookmarkReducer;
