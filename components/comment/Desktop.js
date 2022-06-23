import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import UpOrDown from "./UpOrDown";
import UserInfo from "./UserInfo";
import ReplyButton from "./ReplyButton";
import Content from "./Content";
import UserReply from "./UserReply";
import EditContent from "./EditContent";

//direct child of Comment, only generates if large screen
//sub-components of Comment are all included here to make up the full Comment component
//same components used as Mobile except in different order
const Desktop = (props) => {
    const { query, score, username, image, createdAt, reply, content, comID } =
        props;

    //handles setting the text into a state of "edit" on your comments
    //UserReply section appears if you are the user (as opposed to a reply button)
    //Edit button func is passed as a prop
    const [edit, setEdit] = useState(false);
    const handleEdit = () => setEdit(!edit);

    let bool = username === "juliusomo";

    return (
        <React.Fragment>
            <UpOrDown query={query} score={score} comID={comID} />
            <Grid container item xs={11} sx={{ alignItems: "center" }}>
                <Grid container item xs={12}>
                    <UserInfo
                        username={username}
                        image={image}
                        createdAt={createdAt}
                        query={query}
                    />
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
            </Grid>
        </React.Fragment>
    );
};

export default Desktop;
