import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import {
  Edit as EditIcon,
  ThumbUpAlt as ThumbUpAltIcon,
  Delete as DeleteIcon,
  MoreHoriz as MoreHorizIcon,
} from "@material-ui/icons";
import useStyles from "./styles";
import { deletePost, likePost } from "../../../actions/post";

const Post = (props) => {
  const { post, setCurrentId } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeletePost = () => {
    dispatch(deletePost(post._id));
  };
  const handleLikePost = () => {
    dispatch(likePost(post._id));
  };
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          // style={{ height: 0, paddingTop: "56.25%" }}
          className={classes.cardMedia}
          image={post.selectedFile}
          title={post.title}
        >
          <div className={classes.overlay}>
            <Typography variant={"h6"}>{post.creator}</Typography>
            <Typography variant={"body2"}>
              {moment(post.createdAt).fromNow()}
            </Typography>
          </div>
          <div className={classes.overlay2}>
            <Button
              style={{ color: "white" }}
              size={"small"}
              onClick={() => setCurrentId(post._id)}
            >
              <EditIcon fontsize="default" />
              {/* <MoreHorizIcon fontsize="default" /> */}
            </Button>
          </div>
        </CardMedia>

        <div className={classes.details}>
          <Typography variant={"body2"} color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>

        <CardContent>
          <Typography className={classes.title} variant={"h5"} gutterBottom>
            {post.title}
          </Typography>
          <Typography variant={"body2"} color="textSecondary">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={handleLikePost}>
            <ThumbUpAltIcon fontSize="small" />
            &nbsp;Like&nbsp; {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={handleDeletePost}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
