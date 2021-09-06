import { createAction } from '@reduxjs/toolkit'

export const addAssessments = createAction('assessment/addAssessment', (assessments) => {
  return {
    payload: {
      assessments
    }
  }
})

export const updateValue = createAction('assessment/updateValue', (assessment) => {
  return {
    payload: {
      value: assessment.value,
      id: assessment.id
    }
  }
})
