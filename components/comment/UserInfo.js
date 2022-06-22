import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const UserInfo = (props) => {
    const { username, image, createdAt, query } = props
    
    return (
        <Grid
            item
            xs={query ? 12 : 10}
            sx={{ alignItems: 'center', justifyContent: 'flex-start' }}
        >
            <Avatar 
                src={image}
                sx={{
                    width: 30,
                    height: 30
                }}
            />
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    mx: 1.5
                }}
            >
                {username}
            </Typography>
            <Typography sx={{ fontSize: 16 }}>
                {createdAt}
            </Typography>
        </Grid>
    )
}

export default UserInfo