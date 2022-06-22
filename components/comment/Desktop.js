import React from 'react'
import Grid from '@mui/material/Grid'

import UpOrDown from './UpOrDown'
import UserInfo from './UserInfo'
import ReplyButton from './ReplyButton'
import Content from './Content'

//direct child of Comment, only generates if large screen
//sub-components of Comment are all included here to make up the full Comment component
//same components used as Mobile except in different order
const Desktop = (props) => {
    const { query, score, username, image, createdAt, reply, content, comID } = props
    
    return (
        <React.Fragment>
            <UpOrDown query={query} score={score} comID={comID}/>
            <Grid container item xs={11} sx={{ alignItems: 'center' }}>
                <Grid container item xs={12}>
                    <UserInfo 
                        username={username}
                        image={image}
                        createdAt={createdAt}
                        query={query}
                    />
                    <ReplyButton 
                        query={query}
                        comID={comID}
                        username={username}
                    />
                </Grid>
                <Content 
                    reply={reply}
                    content={content}
                    query={query}
                />
            </Grid>
        </React.Fragment>
    )
}

export default Desktop