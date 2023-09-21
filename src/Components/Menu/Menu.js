import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "../../styles/Menu";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import AllInboxIcon from "@mui/icons-material/AllInbox";
// import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from "@mui/icons-material/Check";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";

const Menu = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState("All");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <Box className={classes.menuContainer}>
      <Box className={classes.container}>
        <Typography className={classes.mainTitle}>Menu</Typography>
        <Box className={classes.sortContainer}>
          <Box className={classes.activeOptionContainer}>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <AlignHorizontalLeftIcon className={classes.optionIcon} />
              <Typography className={classes.optionText}>ALL</Typography>
            </Box>
            <Typography className={classes.optionValue}>15</Typography>
          </Box>
          <Box className={classes.optionContainer}>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <UpcomingIcon className={classes.optionIcon} />
              <Typography className={classes.optionText}>Completed</Typography>
            </Box>
            <Typography className={classes.optionValue}>10</Typography>
          </Box>
          <Box className={classes.optionContainer}>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <AllInboxIcon className={classes.optionIcon} />
              <Typography className={classes.optionText}>
                UnCompleted
              </Typography>
            </Box>
            <Typography className={classes.optionValue}>3</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.optionsContainer}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"completed"}>Completed</MenuItem>
            <MenuItem value={"unCompleted"}>UnCompleted</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Menu;
