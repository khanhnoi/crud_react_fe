import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/post";

const Form = (props) => {
  const { currentId, setCurrentId } = props;
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const postSelected = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  const handleSubmit = (e) => {
    console.log("xxxx");
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(postData, currentId));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  useEffect(() => {
    if (postSelected) {
      setPostData(postSelected);
    }
  }, [postSelected]);
  return (
    <>
      <Paper className="classes.paper">
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" className={classes.titleForm}>
            {currentId ? "Editing a Memory" : "Creating a Memory"}
          </Typography>
          <TextField
            className={classes.textField}
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({
                ...postData,
                creator: e.target.value,
              })
            }
          />
          <TextField
            className={classes.textField}
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({
                ...postData,
                title: e.target.value,
              })
            }
          />
          <TextField
            className={classes.textField}
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({
                ...postData,
                message: e.target.value,
              })
            }
          />
          <TextField
            className={classes.textField}
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({
                ...postData,
                tags: e.target.value.split(","),
              })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({
                  ...postData,
                  selectedFile: base64,
                })
              }
            ></FileBase>
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>

          <Button
            className={classes.buttonClear}
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
            onClick={clear}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
