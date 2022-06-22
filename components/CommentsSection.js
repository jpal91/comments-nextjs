import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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

{
    /* <Grid item xs={12}>
{query ? (
    <Mobile
        content={c.content}
        createdAt={time}
        score={c.score}
        image={c.user.image.webp}
        username={c.user.username}
        reply={c.replyingTo ? c.replyingTo : null}
        key={id}
        id={id}
    />
) : (
    <Desktop
        content={c.content}
        createdAt={time}
        score={c.score}
        image={c.user.image.webp}
        username={c.user.username}
        reply={c.replyingTo ? c.replyingTo : null}
        key={id}
        id={id}
    />
)}
</Grid> */
}
