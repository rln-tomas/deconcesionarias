import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import Header from '../../components/Header'
import Panels from '../../components/Panels'
import actions from '../../redux/actions'

// ---------------Material-UI----------------------
import { Container } from '@material-ui/core'
import { useStyles } from './styles.js'

const Home = () => {
  const dispatch = useDispatch()

  const { addProperties, addAssessments } = actions

  const getAllAssessments = async () => {
    const assessments = await axios.get('/assessment/')
    dispatch(addAssessments(assessments.data.data))
  }

  const getAllProperties = async () => {
    const properties = await axios.get('/property/all')
    dispatch(addProperties(properties.data.data))
  }

  useEffect(() => {
    getAllProperties()
    getAllAssessments()
  }, [])

  const classes = useStyles()

  return (
  <Container maxWidth='lg' className={classes.container}>
    <Helmet>
      <title>Home</title>
      <meta charset='utf-8' />
      <link rel='icon' href='/icons/home-icon.svg' type="image/x-icon" />
    </Helmet>
    <Header />
    <Panels />
  </Container>
  )
}

export default Home
