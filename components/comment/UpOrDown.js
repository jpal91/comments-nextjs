import React, { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from "@mui/icons-material/Remove";

//sub-component of Comment holds the voting/scoring feature
const UpOrDown = (props) => {
    const { query, score, comID } = props
    const [userScore, updateUserScore] = useState(score)

    //calls api to change score in db
    //also keeps score locally so the change is render instantly
    //FUTURE TO-DO: add additional validations in case the api call fails
    //possibly add in pop up notificaitons indcating success/fail
    const updateScore = async (str) => {
        let newScore = userScore

        if (str === 'up') {
          newScore++
          updateUserScore(userScore + 1)
        } else if (str === 'down') {
          newScore--
          updateUserScore(userScore - 1)
        }

        await axios.post('/api/update-score', {
            score: newScore,
            comID: comID
        })
    }

    return (
        <Grid
            item
            xs={query ? 6 : 1}
            sx={{ justifyContent: 'flex-start' }}
        >
            <Box
                sx={{
                    backgroundColor: 'neutral.lGray',
                    width: query ? 90 : 35,
                    height: query ? 35 : 90,
                    display: 'flex',
                    flexDirection: query ? 'row' : 'column',
                    justifyContent: query ? 'space-evenly' : 'center',
                    alignItems: 'center',
                    borderRadius: '15%',
                    mr: query ? 0 : 1
                }}
            >
                <Box sx={{ height: query ? 'auto' : '33%', mt: query ? 0 : 1 }}>
                    <IconButton size='small' onClick={() => updateScore('up')}>
                        <AddIcon sx={{ fontSize: 20, color: "neutral.gBlue" }} />
                    </IconButton>
                </Box>
                <Box sx={{ height: query ? 'auto' : '33%' }}>
                    <Typography
                        sx={{ color: "primary.main", fontWeight: "bold", fontSize: 16 }}
                    >
                        {userScore}
                    </Typography>
                </Box>
                <Box sx={{ height: query ? 'auto' : '33%' }}>
                    <IconButton size='small' onClick={() => updateScore('down')}>
                        <RemoveIcon sx={{ fontSize: 20, color: "neutral.gBlue" }} />
                    </IconButton>
                </Box>
            </Box>
        </Grid>
    )
}

export default UpOrDown