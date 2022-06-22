import axios from 'axios'
import useSWR from 'swr'
import { useTheme, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Grid'

import CommentsSection from '../components/CommentsSection'
// import { formatting } from '../helpers/formatting'

const HomePage = () => {
	// fetches all comments from api on loading
	const fetcher = url => axios.get(url).then(res => res.data)
	const { data, error } = useSWR('/api/all-coms', fetcher)

	//used media query to determine window size and change layout
	// const matches = useMediaQuery(currentTheme.breakpoints.down("lg"));
	const currentTheme = useTheme();
	const matches = useMediaQuery(currentTheme.breakpoints.down("lg"));


	if (!data) {
		return <p>Loading...</p>
	}
	
	return (
		<Grid
			container

			sx={{ width: matches ? 350 : 750 }}
		>
			<CommentsSection query={matches} comments={data} />
		</Grid>
	)
};

export default HomePage;
