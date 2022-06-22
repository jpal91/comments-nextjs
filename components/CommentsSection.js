import React, { useContext } from "react";
import Grid from "@mui/material/Grid";

import Comment from "./Comment";
import Replies from "./Replies";
import ReplySection from "./ReplySection";
import ReplyContext from "../helpers/context";

//top level component that holds the entire comment section
//includes lower level components for replies and the individual reply sections as well
const CommentsSection = (props) => {
    const { comments, query } = props;
    
    //context is used to track which reply buttons have been clicked and
    //therefore which reply boxes are "open"
    const replyCtx = useContext(ReplyContext)

    //maps out each comment from db and sends to individual Comment component
    //also handles opening a ReplySection component in order to reply to another comment
    //will only open ReplySection if the same comment is in the list of "openComments" according to context
    //lastly will populate any specific replies tied to the comment
    return comments.map((c) => {
        let id = c.comID;
        let bool = replyCtx.openReplies.includes(id)

        return (
            <React.Fragment key={id}>
                <Grid item xs={12}>
                    <Comment commentData={c} query={query} />
                </Grid>
                {bool ? <Grid container item xs={12}>
                    <ReplySection query={query} commentData={c} />
                </Grid> : null}
                {c.replies.length > 0 ? <Replies replies={c.replies} query={query} /> : null}
            </React.Fragment>
        );
    });
};

export default CommentsSection;



