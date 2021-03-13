import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

// Material UI
import Grid from "@material-ui/core/Grid";

import useStyles from "./SignIn.style";

// `UI` Components.
import { InputTextField } from "@google-clone/widgets";

// `Custom Hooks`.
import { useI18n } from '@google-clone/i18n';

// Utils.
import { RoutePaths } from "@google-clone/utils";

const SignIn = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const { formatMessage } = useI18n();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item>
          <h1>Login Form</h1>
          Username: <InputTextField
            name="name"
            value=""
            placeholder={formatMessage({ id: 'user_name' })}
          />
          <button onClick={() => {
            history.push(RoutePaths.DashBoard)
          }}>go to dashboard</button>
        </Grid>
      </Grid>
    </>
  );
};

SignIn.propTypes = {
  title: PropTypes.string,
};

export default SignIn;
