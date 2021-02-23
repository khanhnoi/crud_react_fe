import * as types from "../constants/typeActions";
import * as api from "../api";

// Actions

export const getPosts = () => async (dispatch) => {
  try {
    //response
    const { data } = await api.fetchPosts();
    const action = { type: types.GET_ALL_POSTS, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    const action = { type: types.CREATE_POST, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
