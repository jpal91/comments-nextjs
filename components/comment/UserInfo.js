import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

//sub-component of Comment
//shows user info (avatar, handle, etc.)
const UserInfo = (props) => {
    const { username, image, createdAt, query } = props
    
    //hard coding active user since no authentication
    let bool = username === 'juliusomo'

    const userBox = (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 28,
                height: 18,
                backgroundColor: 'primary.main',
                mr: 1.5,
                borderRadius: '5%'
            }}
        >
            <Typography sx={{ fontWeight: 'bold', fontSize: 10, color: 'white' }}>you</Typography>
        </Box>
    )

    return (
        <Grid
            item
            xs={query ? 12 : 9}
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
            {bool ? userBox : null}
            <Typography sx={{ fontSize: 16 }}>
                {createdAt}
            </Typography>
        </Grid>
    )
}

export default UserInfo