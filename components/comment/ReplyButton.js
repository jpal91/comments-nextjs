import { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ReplyIcon from "@mui/icons-material/Reply";
import Button from "@mui/material/Button";

import ReplyContext from "../../helpers/context";
import DeleteButton from "./DeleteButton";

//sub-component of Comment holds the reply button and functionality
const ReplyButton = (props) => {
    const { query, comID, username } = props;
    const replyCtx = useContext(ReplyContext);
    const disabled = replyCtx.openReplies.includes(comID); //disables button after opening

    //Button adds the id of the parent Comment to context
    //adding to context array triggers the ReplySection to open under
    //the comment with the same id
    return (
        <Grid
            item
            xs={query ? 6 : 3}
            sx={{
                alignItems: "center",
                justifyContent: "flex-end",
                
            }}
        >
            <DeleteButton username={username} query={query} comID={comID} />
            <Button
                onClick={() => replyCtx.addReply(comID)}
                disabled={disabled}
                sx={{ mr: query ? 0 : 1 }}
            >
                
                <ReplyIcon
                    sx={{
                        color: disabled ? "primary.disabled" : "primary.main",
                        width: 20,
                        height: 20,
                    }}
                />
                <Typography
                    sx={{
                        color: disabled ? "primary.disabled" : "primary.main",
                        fontWeight: "medium",
                        fontSize: 16,
                    }}
                >
                    Reply
                </Typography>
            </Button>
        </Grid>
    );
};

export default ReplyButton;
