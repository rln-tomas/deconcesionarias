import { createAction } from '@reduxjs/toolkit'

export const addProperties = createAction('property/addProperties', (properties) => {
  return {
    payload: {
      properties
    }
  }
})

export const addProperty = createAction('property/addProperty', (property) => {
  return {
    payload: {
      property: property
    }
  }
})
