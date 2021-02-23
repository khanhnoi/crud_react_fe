import * as types from "../constants/typeActions";
const initPosts = [];

const posts = (posts = initPosts, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS:
      const allPosts = action.payload;
      return allPosts;
      break;
    case types.CREATE_POST:
      const post = action.payload;
      return { ...posts, post };
      break;

    default:
      return posts;
      break;
  }
};

export default posts;
