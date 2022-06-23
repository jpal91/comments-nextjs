import React, { useState } from "react";
import axios from "axios";
import { useSWRConfig } from "swr";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

//alternate to the ReplySection, holds the comment box to add a new comment

const ResponseSection = (props) => {
  const { query } = props;
  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState();
  const handleChange = (event) => setResponseText(event.target.value);
  const { mutate } = useSWRConfig();

  //hanldes submit of a new comment
  //structurally similar to Reply Section but doesn't include any tied comment
  //data as it's not replying to a specific comment
  //user is passed as null so the api handler only inserts and doesn't update
  const responseHandler = async () => {
    setLoading(true);
    await axios.post("/api/add-comment", {
      user: null,
      content: responseText
    });

    mutate("/api/all-coms");
    setResponseText("");
    setLoading(false);
  };

  //had similar configuration issues but decided against breaking this
  //down into two "Mobile" and "Desktop" components
  //instead decided to break up the individual JSX (button, avatar, text) and return it in
  //a certain order depending on if {query} indicates a large or small screen

  const button = (
    <Grid item xs={6} lg={2} sx={{ alignItems: "center", mt: 1 }}>
      <Button
        variant="contained"
        sx={{ maxHeight: 50 }}
        onClick={responseHandler}
      >
        Send
      </Button>
    </Grid>
  );

  const avatar = (
    <Grid
      item
      xs={6}
      lg={1}
      sx={{ alignItems: "center", mt: 1, mr: query ? 0 : 1 }}
    >
      <Avatar
        src="/images/image-juliusomo.webp"
        sx={{
          width: 30,
          height: 30
        }}
      />
    </Grid>
  );

  const text = (
    <Grid item xs={12} lg={9}>
      <TextField
        multiline
        fullWidth
        rows={2}
        value={responseText}
        onChange={handleChange}
        disabled={loading}
      />
    </Grid>
  );

  const spinner = (
    <Grid item xs={6} lg={2} sx={{ alignItems: "center", mt: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CircularProgress />
      </Box>
    </Grid>
  );

  return (
    <Card sx={{ width: "100%", maxWidth: { xs: 350, lg: 750 }, mt: 1, mb: 2 }}>
      <Grid
        container
        sx={{
          p: { xs: 2, lg: 1.5 },
          mx: query ? 0.5 : 0,
          my: query ? 0 : 1.5,
          flexWrap: query ? "wrap" : "nowrap"
        }}
      >
        {query ? (
          <React.Fragment>
            {text}
            {avatar}
            {loading ? spinner : button}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {avatar}
            {text}
            {loading ? spinner : button}
          </React.Fragment>
        )}
      </Grid>
    </Card>
  );
};

export default ResponseSection;
