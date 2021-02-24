import * as types from "../constants/typeActions";
const initPosts = [];

const posts = (posts = initPosts, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS:
      const allPosts = action.payload;
      console.log("allPosts");
      console.log(allPosts);
      return allPosts;
      break;
    case types.CREATE_POST:
      const post = action.payload;
      const newPostsAfterCreate = [...posts, post];
      // console.log("newPostsAfterCreate");
      // console.log(newPostsAfterCreate);
      return newPostsAfterCreate;
      break;
    case types.UPDATE_POST:
    case types.LIKE_POST:
      const postData = action.payload;
      const newPostsAffterUpdate = posts.map((post) =>
        post._id === postData._id ? postData : post
      );
      return newPostsAffterUpdate;
      break;
    case types.DELETE_POST:
      const _id = action.payload;
      const newPostsAffterDelete = posts.filter((post) => post._id !== _id);
      return newPostsAffterDelete;
      break;

    default:
      return posts;
      break;
  }
};

export default posts;
