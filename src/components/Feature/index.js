import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from './styles'
import { Rating } from '@material-ui/lab'
import { Grid, Box } from '@material-ui/core'
import actions from '../../redux/actions'

const Feature = ({ property }) => {
  const { addAssessments } = actions
  const dispatch = useDispatch()

  const [value, setValue] = useState(0)
  const [assessmentId, setAssessment] = useState()

  const allAssessments = useSelector(state => state.assessment.assessments)

  const classes = useStyles()

  const getAssessment = () => {
    const assessment = allAssessments.filter(item => item.id === parseInt(property.id))[0]
    setValue(assessment.value)
    setAssessment(assessment.id)
  }

  const handleChange = async (e, newValue) => {
    setValue(newValue || 0)
    const newAssessment = {
      value: newValue || 0
    }

    await axios.patch(`/assessment/${assessmentId}`, newAssessment)
    const assessments = await axios.get('/assessment')
    dispatch(addAssessments(assessments.data.data))
  }

  useEffect(() => {
    getAssessment()
  }, [allAssessments])

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
