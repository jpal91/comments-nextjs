import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//sub-component of Comment holds written content of comment
const Content = (props) => {
    const { reply, content, query } = props;

    return (
        <Grid
            item
            xs={12}
            sx={{
                mr: query ? 0 : 2,
                mt: 1,
                justifyContent: "flex-start",
            }}
        >
            <Typography className="span" sx={{ fontSize: 16 }}>
                {reply ? (
                    <span style={{ color: "hsl(238, 40%, 52%)" }}>
                        @{reply}{" "}
                    </span>
                ) : null}
                {content}
            </Typography>
        </Grid>
    );
};

export default Content;


