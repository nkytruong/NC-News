import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function SortBy() {
  const [sortBy, setSortBy] = useState(null)
  const [order, setOrder] = useState(null)

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 400, display: "flex", flexDirection: "row", margin: 5}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Sort By"
          onChange={handleSortByChange}
        >
          <MenuItem value="Date">Date</MenuItem>
          <MenuItem value="Votes">Votes</MenuItem>
          <MenuItem value="Comment Count">Comment Count</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Order"
          onChange={handleOrderChange}
        >
          <MenuItem value="Ascending ↑">Ascending ↑</MenuItem>
          <MenuItem value="Descending ↓">Descending ↓</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortBy;
