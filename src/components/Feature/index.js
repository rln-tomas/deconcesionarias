import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useStyles } from './styles'
import { Rating } from '@material-ui/lab'
import { Grid, Box } from '@material-ui/core'

const Feature = ({ property }) => {
  const [value, setValue] = useState(0)
  const [assessmentId, setAssessment] = useState()
  const classes = useStyles()

  const getAssessment = async () => {
    const assessment = await axios.get(`/assessment/${property.id}`)
    setValue(assessment.data.data.value)
    await setAssessment(assessment.data.data.id)
  }

  const handleChange = async (e, newValue) => {
    setValue(newValue || 0)
    const newAssessment = {
      value: newValue || 0
    }

    await axios.patch(`/assessment/${assessmentId}`, newAssessment)
  }

  useEffect(() => {
    getAssessment()
  }, [])

  return (
          <Box className={classes.container} boxShadow={3} component={Grid} xs={6} container item>
            <label>{property.name}</label>
            <Rating
              name={`simple-controlled-${assessmentId}`}
              value={value}
              onChange={handleChange}

            />

          </Box>
  )
}

Feature.propTypes = {
  property: PropTypes.object.isRequired
}

export default Feature
