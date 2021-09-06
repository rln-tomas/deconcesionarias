import { createReducer } from '@reduxjs/toolkit'
import actions from '../actions'

const { addProperties, addProperty, addMyProperties } = actions

const initialState = {
  properties: [],
  myProperties: [],
  property: null
}

const propertyReducer = createReducer(initialState, (builder) => {
  builder.addCase(addProperties, (state, action) => ({ ...state, ...action.payload }))
  builder.addCase(addProperty, (state, action) => ({ ...state, ...action.payload }))
  builder.addCase(addMyProperties, (state, action) => ({ ...state, ...action.payload }))
})

export default propertyReducer
