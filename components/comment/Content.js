import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Content = (props) => {
    const { reply, content, query } = props;

    return (
        <Grid
            xs={12}
            sx={{
                mr: query ? 0 : 2,
                mt: 1,
            }}
        >
            <Typography className="span" sx={{ fontSize: 16 }}>
                {reply ? (
                    <span style={{ color: "hsl(238, 40%, 52%)" }}>
                        @{reply}{" "}
                    </span>
                ) : null}
                {content}
            </Typography>
        </Grid>
    );
};


export default Content