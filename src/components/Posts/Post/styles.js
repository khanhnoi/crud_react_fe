import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  cardMedia: { minHeight: "200px", padding: "5px", display: "flex" },
  overlay: {
    color: "#fff",
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
  },
  overlay2: {
    marginLeft: "auto",
  },
  details: {
    padding: "5px",
  },
}));
