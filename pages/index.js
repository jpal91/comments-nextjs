import axios from 'axios'
import useSWR from 'swr'
import { useTheme, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Grid'

import CommentsSection from '../components/CommentsSection'
// import { formatting } from '../helpers/formatting'

const HomePage = () => {
	// const { comments } = props
	const fetcher = url => axios.get(url).then(res => res.data)
	const { data, error } = useSWR('/api/all-coms', fetcher)
	const currentTheme = useTheme();
	const matches = useMediaQuery(currentTheme.breakpoints.down("lg"));
	console.log(matches)
	if (!data) {
		return <p>Loading...</p>
	}

	// //used media query to determine window size and change layout
	// const matches = useMediaQuery(currentTheme.breakpoints.down("lg"));
	
	return (
		<Grid
			container

			sx={{ width: matches ? 350 : 750 }}
		>
			<CommentsSection query={matches} comments={data} />
		</Grid>
	)
};

// export const getServerSideProps = async () => {
// 	const response = await axios.get('/api/all-coms')

// 	const formattedData = formatting(response.data)

// 	return {
// 		props: {
// 			comments: formattedData
// 		}
// 	}
// };

export default HomePage;
