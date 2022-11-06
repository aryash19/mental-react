import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function Processtwo() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Anxiety</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>YES</MenuItem>
            <MenuItem value={20}>NO</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Depression</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>YES</MenuItem>
            <MenuItem value={20}>NO</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">
            Does your mental health affect your work
          </InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>YES</MenuItem>
            <MenuItem value={20}>NO</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Remote Work</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>YES</MenuItem>
            <MenuItem value={20}>NO</MenuItem>
          </Select>
        </FormControl>

        <Grid item xs={12}>
          <TextField
            required
            id="employees"
            name="employees"
            label="No. of employee's work under you"
            fullWidth
            autoComplete="Age"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
