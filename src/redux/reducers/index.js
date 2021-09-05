import { createReducer } from '@reduxjs/toolkit'
import propertyReducer from './property'
import actions from '../actions'
const { addCategories, setIndex } = actions
const initialState = {
  categories: [],
  index: 0
}

const categoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(addCategories, (state, action) => ({ ...state, ...action.payload }))
  builder.addCase(setIndex, (state, action) => ({ ...state, ...action.payload }))
})

export default {
  propertyReducer,
  categoryReducer
}
