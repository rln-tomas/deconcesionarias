import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'
import Feature from '../Feature'

import { useStyles } from './styles'

const FeatureList = ({ categoryId }) => {
  const { addMyProperties } = actions
  const classes = useStyles()

  const vehicle = useSelector(state => state.vehicle.vehicle)

  const dispatch = useDispatch()

  const allProperties = useSelector(state => state.property.properties)

  const [properties, setProperties] = useState([])

  // Llamada a la api.

  const getProperties = () => {
    const myProperties = allProperties.filter(item => item.categoryId === parseInt(categoryId))
    dispatch(addMyProperties(myProperties))
    setProperties(myProperties)
  }

  useEffect(() => {
    getProperties()
  }, [])

  useEffect(() => {
    getProperties()
  }, [allProperties])

  return (
  <Grid className={classes.container} xs={12} container item>
    {
      properties.map((item) => {
        return (
          <Feature property={item} key={item.id} />
        )
      })
    }
  </Grid>
  )
}

FeatureList.propTypes = {
  categoryId: PropTypes.number.isRequired
}

export default FeatureList
