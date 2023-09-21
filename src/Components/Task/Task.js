import React from "react";
import useStyles from "../../styles/Task";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { activeTask, updateStatus } from "../../reducer/tasksReducer";
// import toast from "react-hot-toast";

const Task = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const taskList = useSelector((state) => {
    return state.tasks.tasks;
  });
  const handleTask = (item) => {
    dispatch(activeTask(item));
  };
  const handleCheckChange = (id) => {
    dispatch(updateStatus(id));
  };

  return (
    <Box className={classes.tasksContainer}>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title}>My Task List</Typography>
        <Typography className={classes.value}>({taskList.length})</Typography>
      </Box>

      <Box className={classes.buttonContainer}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => props.handleAddTask("add")}
        >
          Add New Task
        </Button>
      </Box>
      <Box className={classes.tasklist}>
        {taskList.length > 0 &&
          taskList.map((item) => {
            return (
              <Box className={classes.taskContainer}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Box
                      className={classes.taskDetail}
                      onClick={() => {
                        props.handleAddTask("edit");
                        handleTask(item);
                      }}
                    >
                      <Typography className={classes.taskTitle}>
                        {item.title}
                      </Typography>
                      <Typography className={classes.cardDesc}>
                        {item.desc}
                      </Typography>
                    </Box>
                    <Typography
                      className={[
                        classes.taskStatus,
                        item.status === "Completed"
                          ? classes.completed
                          : item.status === "In Progress"
                          ? classes.inProgress
                          : classes.pending,
                      ]}
                    >
                      {item.status}
                    </Typography>
                    <Checkbox
                      className={classes.Checkbox}
                      checked={item.status === "Completed"}
                      onChange={() => handleCheckChange(item.id)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </CardContent>
                </Card>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default Task;
