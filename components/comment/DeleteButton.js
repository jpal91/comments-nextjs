import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from 'axios'
import { useSWRConfig } from "swr";

import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CircularProgress from "@mui/material/CircularProgress";

const DeleteButton = (props) => {
    const { username, comID, query } = props;
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { mutate } = useSWRConfig()

    //hard coded username since no authentication
    if (username !== "juliusomo") {
        return;
    }

    //takes comment id attached and sends to api to delete
    //after deletion, close modal and recall all-coms to pull updated listed
    const deleteHandler = async () => {
        setLoading(true)
        await axios.post('/api/delete-comment', {
            comID: comID
        })
            .then(() => {
                mutate('/api/all-coms')
                setLoading(false)  
                handleClose()
            })
        

    }


    return (
        <React.Fragment>
            <IconButton onClick={handleOpen}>
                <Image src="/images/icon-delete.svg" width="12" height="14" />
                <Typography
                sx={{
                    color: 'primary.red',
                    fontWeight: 'medium',
                    fontSize: 16,
                    ml: 0.5
                }}
            >
                Delete
            </Typography>
            </IconButton>
            <Modal open={open} onClose={handleClose} closeAfterTransition>
                <Card
                    sx={{
                        position: "absolute",
                        width: query ? 350 : 400,
                        minHeight: 250,
                        top: "50%",
                        left: "50%",
                        transform: 'translate(-50%, -50%)',
                        p: 3,
                        justifyContent: loading ? 'center' : 'flex-start',
                        alignItems: loading ? 'center' : 'normal'
                    }}
                >
                    {!loading ? <Grid container
                        
                    >
                        <Grid item xs={12} sx={{ justifyContent: 'flex-start' }}>
                            <Typography
                                variant='h6'
                            >
                                Delete comment
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ justifyContent: 'flex-start' }}>
                            <Typography
                                variant='body2'
                            >
                                Are you sure you want to delete this comment? This will remove the comment and can't be undone.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ justifyContent: 'space-evenly'}}>
                            <Button variant='contained' sx={{ backgroundColor: 'neutral.gBlue' }} onClick={handleClose}>No, Cancel</Button>
                            <Button variant='contained' sx={{ backgroundColor: 'primary.red' }} onClick={deleteHandler}>Yes, Delete</Button>
                        </Grid>
                    </Grid> : <CircularProgress size={100}/>}
                </Card>
            </Modal>
        </React.Fragment>
    );
};

export default DeleteButton;
