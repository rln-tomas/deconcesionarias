import { createReducer } from '@reduxjs/toolkit'
import actions from '../actions'

const { addAssessments } = actions

const initialState = {
  assessments: []
}

const assessmentReducer = createReducer(initialState, (builder) => {
  builder.addCase(addAssessments, (state, action) => ({ ...state, ...action.payload }))
})

export default assessmentReducer
