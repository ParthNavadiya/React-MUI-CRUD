import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  tasks: [],
  selectedTask: null,
};

const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action) => {
      const newTask = action.payload;
      return produce(state, (draftState) => {
        draftState.tasks.push(newTask);
      });
    },
    editTask: (state, action) => {
      const updatedTask = action.payload;
      console.log(updatedTask);
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === updatedTask.id
      );
      console.log(taskIndex);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask;
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        return produce(state, (draftState) => {
          draftState.tasks.splice(taskIndex, 1);
        });
      }
    },
    activeTask: (state, action) => {
      const selectTask = action.payload;
      return produce(state, (draftState) => {
        draftState.selectedTask = selectTask;
      });
    },
    updateStatus: (state, action) => {
      const taskId = action.payload;
      return produce(state, (draftState) => {
        const updatedTasks = draftState.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            };
          }
          return task;
        });
        draftState.tasks = updatedTasks;
      });
    },

    removeActiveTask: (state) => {
      state.selectedTask = null;
    },

    clearAllTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const {
  clearAllTasks,
  createTask,
  deleteTask,
  editTask,
  activeTask,
  removeActiveTask,
  updateStatus,
} = tasks.actions;
export default tasks.reducer;
