import React from "react";
import Grid from "@mui/material/Grid";


import Comment from "./Comment";
import Replies from "./Replies";

const CommentsSection = (props) => {
    const { comments, query } = props;

    return comments.map((c) => {
        let id = c.comID;

        return (
            <React.Fragment key={id}>
                <Grid item xs={12}>
                    <Comment commentData={c} query={query} />
                </Grid>
                {c.replies.length > 0 ? <Replies replies={c.replies} query={query} /> : null}
            </React.Fragment>
        );
    });
};

export default CommentsSection;


