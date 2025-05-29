const initialState = {
  favorites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAV":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      };
    case "DELETE_FROM_LIST":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.filter((_, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
