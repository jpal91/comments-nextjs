import Image from 'next/image'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton'

import DeleteButton from "./DeleteButton";

//alter component to ReplyButton
//holds the user view of edit and delete which produce the appropriate functionality
const UserReply = (props) => {
    const { query, comID, username } = props;

    //DeleteButton leads to the modal functionality and delete api call
    //edit button calls a prop function passed down from Desktop or Mobile
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