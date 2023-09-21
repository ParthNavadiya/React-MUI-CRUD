// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    padding: "0rem 1rem",
    // width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: "10px",
    "@media (max-width:850px)": {
      width: "100%",
      padding: "0px",
      backgroundColor: "unset",
    },
  },
  container: {
    padding: "1rem 0rem",
    height: "100%",
  },
  title: {
    fontSize: "30px !important",
    marginBottom: "10px !important",
  },
  textfiled: {
    width: "100%",
    marginBottom: "10px !important",
  },
  error: {
    color: "red",
    marginBottom: "10px !important",
  },
  formFooter: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerBtn: {
    margin: "0px 5px !important",
  },
  datePicker: {
    width: "100%",
    height: "2rem",
    margin: "10px 0",
    borderRadius: "10px",
    backgroundColor: "transparent",
    outline: "none",
    border: "1px solid #aaa",
    padding: "0.5rem 0.1rem",
  },
  addTaskContainer: {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "5rem",
    border: "1px solid #aaa",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid #444",
    },
  },
}));

export default useStyles;
