import React from 'react'

import UpOrDown from './UpOrDown'
import UserInfo from './UserInfo'
import ReplyButton from './ReplyButton'
import Content from './Content'

const Desktop = (props) => {
    const { query, score, username, image, createdAt, reply, content } = props
    
    return (
        <React.Fragment>
            <UpOrDown query={query} score={score}/>
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