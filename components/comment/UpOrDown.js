import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from "@mui/icons-material/Remove";

const UpOrDown = (props) => {
    const { query, score } = props
    
    return (
        <Grid
            item
            xs={query ? 6 : 1}
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
                <Box sx={{ height: query ? '100%' : '33%', mt: query ? 0 : 1 }}>
                    <IconButton size='small'>
                        <AddIcon sx={{ fontSize: 20, color: "neutral.gBlue" }} />
                    </IconButton>
                </Box>
                <Box sx={{ height: query ? '100%' : '33%', mt: query ? 0 : 1 }}>
                    <Typography
                        sx={{ color: "primary.main", fontWeight: "bold", fontSize: 16 }}
                    >
                        {score}
                    </Typography>
                </Box>
                <Box sx={{ height: query ? '100%' : '33%', mt: query ? 0 : 1 }}>
                    <IconButton size='small'>
                        <RemoveIcon sx={{ fontSize: 20, color: "neutral.gBlue" }} />
                    </IconButton>
                </Box>
            </Box>
        </Grid>
    )
}

export default UpOrDown