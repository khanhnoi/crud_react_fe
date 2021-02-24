import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { CircularProgress, Grid } from "@material-ui/core";

const Posts = (props) => {
  const { setCurrentId } = props;
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  // console.log("posts");
  // console.log(posts);
  // console.log(posts.length);
  // console.log(!posts.length);
  return !posts.length ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
