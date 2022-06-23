import Image from 'next/image'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton'

import DeleteButton from "./DeleteButton";

//sub-component of Comment holds the reply button and functionality
const UserReply = (props) => {
    const { query, comID, username } = props;
    //const replyCtx = useContext(ReplyContext);
    //const disabled = replyCtx.openReplies.includes(comID); //disables button after opening

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
            <IconButton
                onClick={props.edit}
                sx={{ mr: query ? 0 : 1 }}
            >
                <Image src='/images/icon-edit.svg' width='12' height='14' />
                <Typography
                    sx={{
                        color: "primary.main",
                        fontWeight: "medium",
                        fontSize: 16,
                        ml: 0.5
                    }}
                >
                    Edit
                </Typography>
            </IconButton>
        </Grid>
    );
};

export default UserReply;