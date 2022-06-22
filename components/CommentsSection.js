import React from "react";
import Grid from "@mui/material/Grid";


import Comment from "./Comment";

const CommentsSection = (props) => {
    const { comments, query } = props;

    return comments.map((c) => {
        let id = c.comID;

        return (
            <React.Fragment key={id}>
                <Grid item xs={12}>
                    <Comment commentData={c} query={query} />
                </Grid>
            </React.Fragment>
        );
    });
};

export default CommentsSection;


