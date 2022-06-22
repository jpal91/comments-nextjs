import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Comment from "./Comment";

const Replies = (props) => {
    const { replies, query } = props;

    return (
        <Grid container item xs={12}>
            <Grid
                item
                xs={1}
                sx={{
                    my: 2,
                }}
            >
                <Box
                    sx={{
                        width: 0,
                        height: "100%",
                        border: "1px solid",
                        borderColor: "gray",
                    }}
                ></Box>
            </Grid>
            <Grid item xs={11} sx={{ flexDirection: 'column' }}>
                {replies.map((r) => (
                    <React.Fragment key={r.comID}>
                        <Comment query={query} commentData={r}/>
                    </React.Fragment>
                ))}
            </Grid>
        </Grid>
    );
};

export default Replies
