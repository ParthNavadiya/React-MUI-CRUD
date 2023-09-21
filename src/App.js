import React, { useEffect, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import useStyles from "./styles/App";
import Menu from "./Components/Menu/Menu";
import Task from "./Components/Task/Task";
import Form from "./Components/Form/Form";
import { Toaster } from "react-hot-toast";
import PopUpForm from "./Components/PopUpForm/PopUpForm";
import { useDispatch } from "react-redux";
import { removeActiveTask } from "./reducer/tasksReducer";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopUp, setOpenPopUp] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    if (isAdd) {
      setOpenPopUp(true);
    }
  }, [isAdd]);

  const handleTask = (type) => {
    if (type === "add") {
      dispatch(removeActiveTask());
    }
    setIsAdd(true);
  };

  return (
    <Box className={classes.mainContainer}>
      <Toaster />
      <Box className={classes.container}>
        <Menu />
        <Task handleAddTask={(type) => handleTask(type)} />

        <Box className={classes.webPopup}>
          <Form />
        </Box>
        <Box className={classes.mobilePopup}>
          {openPopUp && (
            <PopUpForm
              open={openPopUp}
              setOpenPopUp={(open) => {
                setOpenPopUp(open);
                setIsAdd(false);
              }}
            ></PopUpForm>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
