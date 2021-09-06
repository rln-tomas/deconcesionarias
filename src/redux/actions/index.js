import { createAction } from '@reduxjs/toolkit'
import { addAssessments, updateValue } from './assessment'
import { addProperties, addProperty, addMyProperties } from './property'
import { addVehicle } from './vehicle'

const addCategories = createAction('category/addCategories', (categories) => {
  return {
    payload: {
      categories
    }
  }
})

const setIndex = createAction('category/setIndex', (index) => {
  return {
    payload: {
      index: index
    }
  }
})

export default {
  updateValue,
  addCategories,
  addAssessments,
  addMyProperties,
  addProperty,
  addProperties,
  setIndex,
  addVehicle
}
