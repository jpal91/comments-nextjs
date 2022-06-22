import axios from 'axios'
import { useTheme, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Grid'

import CommentsSection from '../components/CommentsSection'
import { formatting } from '../helpers/formatting'

const HomePage = (props) => {
	const { comments } = props

	const currentTheme = useTheme();

	//used media query to determine window size and change layout
	const matches = useMediaQuery(currentTheme.breakpoints.down("lg"));
	
	return (
		<Grid 
			sx={{ width: matches ? 350 : 750 }}
		>
			<CommentsSection query={matches} comments={comments} />
		</Grid>
	)
};

export const getServerSideProps = async () => {
	const response = await axios.get('/api/all-coms')

	const formattedData = formatting(response.data)

	return {
		props: {
			comments: formattedData
		}
	}
};

export default HomePage;
