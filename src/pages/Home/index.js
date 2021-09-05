import React from 'react'
import Header from '../../components/Header'
import Panels from '../../components/Panels'

// ---------------Material-UI----------------------
import { Container } from '@material-ui/core'
import { useStyles } from './styles.js'

const Home = () => {
  const classes = useStyles()

  return (
  <Container maxWidth='md' className={classes.container}>
    <Header />
    <Panels />
  </Container>
  )
}

export default Home
