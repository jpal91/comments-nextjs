import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import UpOrDown from "./UpOrDown";
import UserInfo from "./UserInfo";
import ReplyButton from "./ReplyButton";
import Content from "./Content";
import UserReply from "./UserReply";
import EditContent from "./EditContent";

//direct child of Comment, only generates if small screen
//sub-components of Comment are all included here to make up the full Comment component
//same components used as Desktop except in different order
const Mobile = (props) => {
    const { query, score, username, image, createdAt, reply, content, comID } =
        props;
    const [edit, setEdit] = useState(false);
    const handleEdit = () => setEdit(!edit);

    let bool = username === "juliusomo";

    return (
        <Grid container item xs={12} sx={{ alignItems: "center" }}>
            <UserInfo
                username={username}
                image={image}
                createdAt={createdAt}
                query={query}
            />
            {!edit ? (
                <Content
                    reply={reply}
                    content={content}
                    query={query}
                    edit={edit}
                />
            ) : (
                <EditContent
                    content={content}
                    query={query}
                    comID={comID}
                    update={handleEdit}
                />
            )}
            <Grid container item xs={12} sx={{ alignItems: "center", mt: 1.5 }}>
                <UpOrDown query={query} score={score} comID={comID} />
                {!bool ? (
                    <ReplyButton
                        query={query}
                        comID={comID}
                        username={username}
                    />
                ) : (
                    <UserReply
                        query={query}
                        comID={comID}
                        username={username}
                        edit={handleEdit}
                    />
                )}
            </Grid>
        </Grid>
    );
};

export default Mobile;
