import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import { findTime } from "../helpers/findtime";
import Desktop from './comment/Desktop'
import Mobile from './comment/Mobile'

//component for individual comment, mapped from CommentSection
const Comment = (props) => {
    const { commentData, query } = props;
    // const query = useMediaQuery(currentTheme.breakpoints.down("lg"));
    const time = findTime(commentData.createdAt)

    //Mobile and Desktop have same info but ultimately different configuration
    //was having difficulty getting them into one component so broke it into two with sub components
    return (
        <Card sx={{ width: '100%', maxWidth: { xs: 350, lg: 750 }, my: 2 }}>
            <Grid
                container
                sx={{
                    flexWrap: "nowrap",
                    p: { xs: 2, lg: 1.5 },
                    mx: query ? 0.5 : 0,
                    my: query ? 0 : 1.5
                }}
            >
                {query ? (
                    <Mobile
                        content={commentData.content}
                        createdAt={time}
                        score={commentData.score}
                        image={commentData.user.image.webp}
                        username={commentData.user.username}
                        reply={commentData.replyingTo ? commentData.replyingTo : null}
                        query={query}
                        comID={commentData.comID}
                    />
                ) : (
                    <Desktop
                        content={commentData.content}
                        createdAt={time}
                        score={commentData.score}
                        image={commentData.user.image.webp}
                        username={commentData.user.username}
                        reply={commentData.replyingTo ? commentData.replyingTo : null}
                        query={query}
                        comID={commentData.comID}
                    />
                )}
            </Grid>
        </Card>
    );
};

export default Comment;
