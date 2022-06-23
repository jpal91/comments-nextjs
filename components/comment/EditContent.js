import React, { useState } from "react";
import { useSWRConfig } from 'swr'
import axios from 'axios'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

//sub-component of Comment holds written content of comment
const EditContent = (props) => {
    const { content, query, comID } = props;
    const [currentContent, setCurrentContent] = useState(content)
    const [loading, setLoading] = useState(false)
    const handleEdit = (event) => setCurrentContent(event.target.value)
    const { mutate } = useSWRConfig()

    const editComment = async () => {
        setLoading(true)
        await axios.post('/api/edit-comment', {
            newContent: currentContent,
            comID: comID
        })

        mutate('/api/all-coms')
        setLoading(false)
        props.update()
    }

    return (
        <React.Fragment>
            <Grid
                item
                xs={12}
                sx={{
                    mr: query ? 0 : 2,
                    mt: 1,
                    justifyContent: "flex-start",
                }}
            >
                <TextField
                    multiline
                    fullWidth
                    rows={4}
                    onChange={handleEdit}
                    defaultValue={content}
                />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    mr: query ? 0 : 2,
                    mt: 1,
                    justifyContent: "flex-end",
                }}
            >
                {loading ? <CircularProgress sx={{ mr: 1 }}/> : <Button variant='contained' onClick={editComment}>Update</Button>}
            </Grid>
        </React.Fragment>
    );
};

export default EditContent;
