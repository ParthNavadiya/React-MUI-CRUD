import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import useStyles from "../../styles/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  createTask,
  deleteTask,
  editTask,
  removeActiveTask,
} from "../../reducer/tasksReducer";
import toast from "react-hot-toast";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const initialState = {
  title: "",
  desc: "",
  status: "Pending",
};
const initialStateError = {
  title: "",
  desc: "",
  status: "",
};

const Form = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // State to manage form input values
  const selectedTask = useSelector((state) => {
    return state.tasks.selectedTask;
  });
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialStateError);
  const [openPopUp, setOpenPopUp] = useState(false);

  const handleClickOpenPopUp = () => {
    setOpenPopUp(true);
  };

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  useEffect(() => {
    if (selectedTask) {
      console.log("sss", selectedTask);
      setFormData(selectedTask);
    }
  }, [selectedTask]);

  // Handle form input status changes
  const handleChange = (event) => {
    setFormData({ ...formData, status: event.target.value });
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { title, desc } = formData;
    let statusError = {};
    var valid = true;
    if (!title) {
      statusError.title = "Please add title";
      valid = false;
    } else {
      statusError.title = "";
    }

    if (!desc) {
      statusError.desc = "Please add description";
      valid = false;
    } else {
      statusError.desc = "";
    }

    setError(statusError);

    return valid;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      if (selectedTask) {
        console.log(formData);
        dispatch(editTask(formData));
        dispatch(removeActiveTask());
        clearFormDetail();
        toast.success("Task updated !!!");
      } else {
        formData.id = Date.now();
        dispatch(createTask(formData));
        clearFormDetail();
        toast.success("Task added !!!");
      }
    } else {
      // console.log("dddd");
    }
  };

  const handleDeleteTask = () => {
    if (selectedTask) {
      dispatch(deleteTask(selectedTask.id));
      dispatch(removeActiveTask());
      clearFormDetail();
      handleClosePopUp();
      if (props.formOpen) props.handleCloseFormPopUp();
      toast.success("Task deleted !!!");
    }
  };

  const clearFormDetail = () => {
    setFormData(initialState);
    setError(initialStateError);
    if (props.formOpen) props.handleCloseFormPopUp();
  };

  return (
    <Box className={classes.maincontainer}>
      <Dialog
        open={openPopUp}
        onClose={handleClosePopUp}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete this task?
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClosePopUp}>Cancel</Button>
          <Button onClick={handleDeleteTask} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <form onSubmit={handleSubmit}>
        <Box className={classes.container}>
          <Typography className={classes.title}>Task:</Typography>
          <TextField
            className={classes.textfiled}
            id="outlined-search"
            name="title"
            label="Title"
            variant="outlined"
            value={formData.title}
            onChange={handleInputChange}
          />
          {error && error.title && (
            <Typography className={classes.error}>{error.title}</Typography>
          )}
          <TextField
            className={classes.textfiled}
            id="outlined-multiline-static"
            label="Description"
            name="desc"
            multiline
            rows={4}
            value={formData.desc}
            placeholder="Description"
            onChange={handleInputChange}
          />
          {error && error.desc && (
            <Typography className={classes.error}>{error.desc}</Typography>
          )}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"In Progress"}>In Progress</MenuItem>
              <MenuItem value={"Completed"}>Completed</MenuItem>
            </Select>
          </FormControl>
          <Box className={classes.formFooter}>
            {selectedTask && (
              <Button
                className={classes.footerBtn}
                type="button"
                variant="contained"
                color="error"
                onClick={handleClickOpenPopUp}
                size="medium"
              >
                Delete Task
              </Button>
            )}
            <Button
              type="submit"
              className={classes.footerBtn}
              variant="contained"
              size="medium"
              color="success"
            >
              {selectedTask ? "Edit Task" : "Save Task"}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
