export const actionTypes = {
  SET_USER: "SET_USER",
  SET_USERS: "SET_USERS",
  SET_PUSERS: "SET_PUSERS",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_POSTS: "SET_POSTS",
  ADD_POST: "ADD_POST",
  ADD_CATEGORY: "ADD_CATEGORY",
  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  EDIT_CATEGORY: "EDIT_CATEGORY",
  EDIT_POST: "EDIT_POST",
};

const reducer = (state, action) => {
  // console.log(action)
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    case actionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case actionTypes.SET_PUSERS:
      return {
        ...state,
        pusers: action.users,
      };
    case actionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user,
        },
      };
    case actionTypes.EDIT_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category._id === action.category._id) {
            return action.category;
          } else {
            return category;
          }
        }),
      };
    case actionTypes.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.post._id) {
            return action.post;
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
