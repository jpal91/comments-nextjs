import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import { findTime } from "../helpers/findtime";

const Comment = (props) => {
    const { commentData, query } = props;

    const time = findTime(commentData.createdAt)

    return (
        <Card sx={{ maxWidth: { xs: 350, xl: 750 }, my: 2 }}>
            <Grid
                container
                sx={{
                    flexWrap: "nowrap",
                    p: { xs: 2, xl: 1.5 },
                    mx: { xs: 0.5, xl: 1.5 },
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
                    />
                ) : (
                    <Desktop
                        content={commentData.content}
                        createdAt={time}
                        score={commentData.score}
                        image={commentData.user.image.webp}
                        username={commentData.user.username}
                        reply={commentData.replyingTo ? commentData.replyingTo : null}
                    />
                )}
            </Grid>
        </Card>
    );
};

export default Comment;
