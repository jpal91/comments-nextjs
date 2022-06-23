import React, { useRef, useEffect, useState } from "react";
import axios from 'axios'
import { useSWRConfig } from "swr";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

//section that is generated below a Comment if context indicates the 
//reply button has been pressed (context - "open")

//comes loaded with all the parent comment data so that a
//reqest can be dispatched to the api and db can be updated with
//new comment data

const ResponseSection = (props) => {
    const { query } = props;
    const responseTextRef = useRef();
    const [responseText, setResponseText] = useState()
    const { mutate } = useSWRConfig()

    //hanldes submit of a new comment
    //structurally similar to Reply Section but doesn't include any tied comment
    //data as it's not replying to a specific comment
    //user is passed as null so the api handler only inserts and doesn't update
    const responseHandler = async () => {
        const response = await axios.post('/api/add-comment', {
            user: null,
            content: responseTextRef.current.value
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
            <Button variant="contained" sx={{ maxHeight: 50 }} onClick={responseHandler}>
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
                ref={responseTextRef}
            />
        </Grid>
    );

    useEffect(() => {
        setResponseText(responseTextRef.current.value)
        console.log(responseText)
    })

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

export default ResponseSection;
