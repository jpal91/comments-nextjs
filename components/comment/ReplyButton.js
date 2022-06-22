import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ReplyIcon from '@mui/icons-material/Reply'

const ReplyButton = (props) => {
    const { query } = props

    return (
        <Grid
            item
            xs={query ? 6 : 2}
            sx={{
                alignItems: 'center',
                justifyContent: query ? 'flex-end' : 'center'
            }}
        >
            <ReplyIcon sx={{ color: "primary.main", width: 20, height: 20 }} />
            <Typography
                sx={{
                    color: 'primary.main',
                    fontWeight: 'medium',
                    fontSize: 16
                }}
            >
                Reply
            </Typography>
        </Grid>
    )
}

export default ReplyButton