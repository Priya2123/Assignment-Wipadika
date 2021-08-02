import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    height: "15vh",
    width: "100%",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    // objectFit: "contain",
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
    color: "lightblue",
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
}));
