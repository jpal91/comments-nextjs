import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Comment from "./Comment";
import ReplySection from "./ReplySection";
import ReplyContext from "../helpers/context";

//component to map each reply to the appropriate comment
//each individual comment is a Comment component, as well as each reply
const Replies = (props) => {
    const { replies, query } = props;
    const replyCtx = useContext(ReplyContext);

    //renders each reply to a comment as a Comment component
    //also handles generating a reply section if context indicates it is "open"
    
    //had difficulty figuring out the proper way to do a vertical line break so just used a
    //Box component instead with no width and thick borders to simulate
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
            <Grid item xs={11} sx={{ flexDirection: "column" }}>
                {replies.map((r) => {
                    let bool = replyCtx.openReplies.includes(r.comID)

                    return (
                        <React.Fragment key={r.comID}>
                            <Comment query={query} commentData={r} />
                            {bool ? <ReplySection query={query} commentData={r}/> : null}
                        </React.Fragment>
                    );
                })}
            </Grid>
        </Grid>
    );
};

export default Replies;
