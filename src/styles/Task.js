// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tasksContainer: {
    padding: "0 1rem",
    borderRadius: "10px",
    width: "50%",
    height: "100%",
    backgroundColor: "white",
    "@media (max-width:850px)": {
      width: "100%",
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "20px",
  },
  title: {
    fontSize: "30px !important",
    marginBottom: "10px !important",
  },
  value: {
    fontSize: "30px !important",
    marginBottom: "10px !important",
  },
  buttonContainer: {
    display: "flex",
    padding: "0.5rem 0.2rem",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "flex-end",
    "@media (max-width:850px)": {
      justifyContent: "flex-start",
    },
  },
  taskContainer: {
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    borderRadius: "10px",
  },
  tasklist: {
    overflow: "auto",
    height: "80%",
    padding: "0px 20px",
  },
  card: {
    // margin: "0 0.5rem",
    boxShadow: "none !important",
    border: "1px solid #dedede",
    cursor: "pointer",
    width: "100%",
    "&:hover": {
      border: "1px solid #aaa",
      transition: "all 0.2s ease-in",
      cursor: "pointer",
      transform: "translateY(-10px)",
    },
  },
  activeCard: {
    minHeight: "400px",
    // margin: "0 0.5rem",
    boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75) !important",
    border: "1px solid #fff",
    cursor: "pointer",
    position: "relative",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    width: "100%",
    "@media (max-width: 768px)": {
      // flexDirection: "column",
    },
  },
  taskDetail: {
    width: "50%",
  },
  taskStatus: {
    textTransform: "capitalize",
  },
  completed: {
    color: "green",
  },
  inProgress: {
    color: "blue",
  },
  pending: {
    color: "red",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "500",
  },
  cardDesc: {
    fontSize: "13px",
    color: "#4e5259",
    opacity: "0.8",
    marginTop: "0.5rem !important",
    lineHeight: "120%",
  },
  activeTaskContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.2rem",
    marginTop: "0.5rem",
    cursor: "pointer",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: "10px",
  },
  Checkbox: {
    marginRight: "25px !important",
  },
}));

export default useStyles;
