import React, { Component, useState } from "react";

import OtpInput from "react-otp-input";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import { Navigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  grid: {
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#311b92",
    paddingBottom: "10px",
    paddingTop: "10px",
    paddingLeft: "70px",
    paddingRight: "70px",
    fontSize: "25px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function OtpUi() {
  const classes = useStyles();
  const [OTP, setOTP] = useState("");
  const [success, setSuccess] = useState(false);
  const endpoint = process.env.REACT_APP_KEY;
  const SubmitOtp = async () => {
    await axios.post(endpoint, OTP).then((res) => {
      setSuccess(true);
    });
  };
  if (success) {
    return <Navigate to="/verified" replace={true} />;
  }
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />

      {process.env.URL}
      <div>
        <Grid
          container
          style={{ backgroundColor: "white" }}
          className={classes.grid}
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item container justify="center">
            <Grid item container alignItems="center" direction="column">
              <Grid item>
                <Typography component="h1" variant="h5">
                  Verification Code
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Grid item spacing={3} justify="center">
              <OtpInput
                numInputs={6}
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)",
                }}
                value={OTP}
                onChange={setOTP}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={SubmitOtp}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
