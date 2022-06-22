import React, { useRef, useContext } from "react";
import axios from 'axios'
import { useSWRConfig } from "swr";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import ReplyContext from "../helpers/context";

//section that is generated below a Comment if context indicates the 
//reply button has been pressed (context - "open")

//comes loaded with all the parent comment data so that a
//reqest can be dispatched to the api and db can be updated with
//data tying it to original comment as well as adding a new comment in general

const ReplySection = (props) => {
    const { query, commentData } = props;
    const textRef = useRef();
    const replyCtx = useContext(ReplyContext);
    const { mutate } = useSWRConfig()

    //handles a submit of a reply to a comment
    //first - removes the status of "open" from context so the reply box won't show any longer
    //second - sends parent comment data and new comment text to api, db is updated
    //third - mutate() calls any useSWR hooks with the same api call to revalidate and render new comment
    const replyHandler = async () => {
        replyCtx.removeReply(commentData.comID)

        const response = await axios.post('/api/add-comment', {
            ...commentData,
            content: textRef.current.value
        })

        mutate('/api/all-coms')
        console.log(response)
    };

    //had similar configuration issues but decided against breaking this
    //down into two "Mobile" and "Desktop" components
    //instead decided to break up the individual JSX (button, avatar, text) and return it in 
    //a certain order depending on if {query} indicates a large or small screen

    const button = (
        <Grid item xs={6} lg={2} sx={{ alignItems: "center", mt: 1 }}>
            <Button variant="contained" sx={{ maxHeight: 50 }} onClick={replyHandler}>
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
                    height: 30,
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
                ref={textRef}
                defaultValue={`@${commentData.user.username}`}

            />
        </Grid>
    );

    return (
        <Card
            sx={{ width: "100%", maxWidth: { xs: 350, lg: 750 }, mt: 1, mb: 2 }}
        >
            <Grid
                container
                sx={{
                    p: { xs: 2, lg: 1.5 },
                    mx: query ? 0.5 : 0,
                    my: query ? 0 : 1.5,
                    flexWrap: query ? "wrap" : "nowrap",
                }}
            >
                {query ? (
                    <React.Fragment>
                        {text}
                        {avatar}
                        {button}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {avatar}
                        {text}
                        {button}
                    </React.Fragment>
                )}
            </Grid>
        </Card>
    );
};

export default ReplySection;

// 6 1  12 9  6 2
