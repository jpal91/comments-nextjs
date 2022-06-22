import React from "react";

import UpOrDown from "./UpOrDown";
import UserInfo from "./UserInfo";
import ReplyButton from "./ReplyButton";
import Content from "./Content";

const Mobile = (props) => {
    const { query, score, username, image, createdAt, reply, content } = props;

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
                <UpOrDown query={query} score={score} />
                <ReplyButton query={query} />
            </Grid>
        </Grid>
    );
};

export default Mobile;
