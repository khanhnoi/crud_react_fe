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
