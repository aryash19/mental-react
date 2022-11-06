import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function Processthree() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">
            Are you experiencing any sleep problems
          </InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>YES</MenuItem>
            <MenuItem value={20}>NO</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Do you live with your Family</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>YES</MenuItem>
            <MenuItem value={20}>NO</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Relationship Status</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>Married</MenuItem>
            <MenuItem value={20}>Unmarried</MenuItem>
            <MenuItem value={30}>Commited</MenuItem>
          </Select>
        </FormControl>

        <Grid item xs={12}>
          <TextField
            required
            id="comment"
            label="Any Comment"
            fullWidth
            autoComplete="comment"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
