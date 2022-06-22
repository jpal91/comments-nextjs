import React from "react";
import Grid from '@mui/material/Grid'

import UpOrDown from "./UpOrDown";
import UserInfo from "./UserInfo";
import ReplyButton from "./ReplyButton";
import Content from "./Content";

//direct child of Comment, only generates if small screen
//sub-components of Comment are all included here to make up the full Comment component
//same components used as Desktop except in different order
const Mobile = (props) => {
    const { query, score, username, image, createdAt, reply, content, comID } = props;

    return (
        <Grid container item xs={12} sx={{ alignItems: "center" }}>
            <UserInfo
                username={username}
                image={image}
                createdAt={createdAt}
                query={query}
            />
            <Content reply={reply} content={content} query={query} />
            <Grid container item xs={12} sx={{ alignItems: "center", mt: 1.5 }}>
                <UpOrDown query={query} score={score} comID={comID}/>
                <ReplyButton query={query} comID={comID}/>
            </Grid>
        </Grid>
    );
};

export default Mobile;
