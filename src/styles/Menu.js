// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    padding: "0 1rem",
    borderRadius: "10px",
    width: "20%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    "@media (max-width:850px)": {
      width: "100%",
      height: "20%",
      backgroundColor: "white",
    },
  },
  container: {
    padding: "1rem 0rem",
    height: "100%",
    "@media (max-width:850px)": {
      display: "none",
    },
  },
  mainTitle: {
    fontSize: "30px !important",
    fontWeight: "600 !important",
  },
  title: {
    marginTop: "1rem",
    fontSize: "16px !important",
  },
  sortContainer: {
    marginTop: "0.5rem",
  },
  optionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
    margin: "0.2rem 0",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "1rem",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
  optionValue: {
    backgroundColor: "white",
    borderRadius: "10px",
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  activeOptionContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
    margin: "1rem 0",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "1rem",
  },
  optionsContainer: {
    display: "none",
    "@media (max-width:850px)": {
      display: "block",
    },
  },
}));

export default useStyles;
