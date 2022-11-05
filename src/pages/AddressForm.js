import * as React from "react";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="age "
            name="age"
            label="Age"
            fullWidth
            autoComplete="Age"
            variant="standard"
          />
        </Grid>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Gender</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={20}>Not prefer to say</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Self Employed</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>YES</MenuItem>
            <MenuItem value={20}>NO</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Family History</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>YES</MenuItem>
            <MenuItem value={20}>NO</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Profession</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>Student</MenuItem>
            <MenuItem value={20}>Others</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="select">Any Previous Treatment</InputLabel>
          <Select required labelId="select" id="select" label="Gender">
            <MenuItem value={10}>YES</MenuItem>
            <MenuItem value={20}>NO</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}
