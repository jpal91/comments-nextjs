import React from 'react'
import Grid from '@mui/material/Grid'

import ResponseSection from './ResponseSection'
import CommentsSection from './CommentsSection'

const CommentApp = (props) => {
    const { comments, query } = props
    
    return (
        <React.Fragment>
            <CommentsSection comments={comments} query={query} />
            <Grid item xs={12}>
                <ResponseSection query={query}/>
            </Grid>
        </React.Fragment>
    )
}

export default CommentApp

//<ResponseSection query={query}/>