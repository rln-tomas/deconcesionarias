import { createReducer } from '@reduxjs/toolkit'
import actions from '../actions'

const { addVehicle } = actions

const initialState = {
  vehicle: {
    id: null,
    name: ''
  }
}

const vehicleReducer = createReducer(initialState, (builder) => {
  builder.addCase(addVehicle, (state, action) => ({ ...state.vehicle, ...action.payload }))
})

export default vehicleReducer
