// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  container: {
    width: "95%",
    height: "85vh",
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:850px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  webPopup: {
    "@media (max-width:850px)": {
      display: "none",
    },
  },
  mobilePopup: {
    display: "none !important",
    "@media (max-width:850px)": {
      display: "block !important",
    },
  },
}));

export default useStyles;
