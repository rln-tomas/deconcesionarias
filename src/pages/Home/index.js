import React from 'react'
import Header from '../../components/Header'


//---------------Material-UI----------------------
import {Container} from '@material-ui/core'
import {useStyles} from './styles.js'

const Home = () => {
	const classes = useStyles()
	
	return (
		<Container maxWidth='md' className='container'>
						<Header />
						<h1>Algo</h1>
		</Container>
	)	

}

export default Home

