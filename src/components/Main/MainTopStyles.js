import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    height: "15vh",
    width: "100%",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    // objectFit: "contain",
    backgroundSize: "cover",
  },
  paper: {
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
  },
  divider: {
    color: "#000",
    marginBottom: "10px",
  },
  userimage: {
    borderRadius: "50%",
    height: "15vh",
    marginTop: "-7vh",
  },
  name: {
    fontWeight: "bold",
    color: "#51cbce",
  },
  sub: {
    color: "lightGray",
  },
  text: {
    color: "gray",
  },
  teampaper: {
    borderRadius: "20px",
    marginTop: "1.5%",
  },
  teamhead: {
    color: "gray",
  },
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  formpaper: {
    borderRadius: "20px",
    marginTop: "1.5%",
  },
  chip: {
    backgroundColor: "#51cbce",
    color: "#fff",
    marginBottom: "10%",
    cursor: "pointer",
  },
}));
