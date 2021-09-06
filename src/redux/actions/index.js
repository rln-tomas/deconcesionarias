import { createAction } from '@reduxjs/toolkit'
import { addProperties, addProperty } from './property'
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
  addCategories,
  addProperty,
  addProperties,
  setIndex,
  addVehicle
}
