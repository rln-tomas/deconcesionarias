import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Panels from '../../components/Panels'

// ---------------Material-UI----------------------
import { Container } from '@material-ui/core'
import { useStyles } from './styles.js'

const Home = () => {
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
