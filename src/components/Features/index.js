import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'
import Feature from '../Feature'

import { useStyles } from './styles'

const FeatureList = ({ categoryId }) => {
  const { addProperties } = actions
  const classes = useStyles()

  const vehicle = useSelector(state => state.vehicle.vehicle)

  const dispatch = useDispatch()

  const [properties, setProperties] = useState([])

  // Llamada a la api.

  const getProperties = async () => {
    const properties = await axios.get(`/property/all/${categoryId}`)
    dispatch(addProperties(properties.data.data))
    setProperties(properties.data.data)
  }

  useEffect(() => {
    getProperties()
  }, [])

  useEffect(() => {

  }, [vehicle])

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
