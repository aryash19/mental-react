import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./sidebar.css";
import { Grid } from "@mui/material";
import AppTasks from "./AppTask";

export const Docinfo = () => {
  return (
    <Grid container spacing={3}>
      <Grid>
        <Card sx={{ minWidth: 275 }} elevation="4" className="Card2">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              textAlign={"center"}
            >
              Your Total Appointment Slots
            </Typography>
            <Typography variant="h5" component="div" textAlign={"center"}>
              7
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography variant="body2" textAlign={"center"}>
              Your Total time slots of Appointment
            </Typography>
          </CardContent>
          <CardActions alignItems={"center"} className="cardbtn">
            <Button size="small" alignItems={"center"}>
              Update Your Slots
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid>
        <Card sx={{ minWidth: 275 }} elevation="4" className="Card">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              textAlign={"center"}
            >
              Your booked Appointments
            </Typography>
            <Typography variant="h5" component="div" textAlign={"center"}>
              5
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>

            <Typography variant="body2" textAlign={"center"}>
              Today's booked Appointment
            </Typography>
          </CardContent>
          <CardActions className="cardbtn2">
            <Button size="small">Patient Info</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid>
        <Card sx={{ minWidth: 275 }} elevation="4" className="Card">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              textAlign={"center"}
            >
              New Patients
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              4
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography variant="body2" textAlign={"center"}>
              New patient Appointments
            </Typography>
          </CardContent>
          <CardActions className="cardbtn2">
            <Button size="small">Patient Info</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={8} className="slottask" elevation="5">
        <AppTasks
          className="slottask"
          title="Time Slots"
          list={[
            { id: "1", label: "Slot Time 10:00 to 10:30 " },
            { id: "2", label: "Slot Time 10:45 to 11:15" },
            { id: "3", label: "Slot Time 11:30 to 12:00" },
            { id: "4", label: "Slot Time 01:00 to 01:30" },
            { id: "5", label: "Slot Time 01:45 to 02:15" },
            { id: "6", label: "Slot Time 02:30 to 03:00" },
            { id: "7", label: "Slot Time 3:30 to 04:00" },
          ]}
        />
      </Grid>
    </Grid>
  );
};
