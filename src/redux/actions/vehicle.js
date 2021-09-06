import { createAction } from '@reduxjs/toolkit'

export const addVehicle = createAction('vehicle/addVehicle', (vehicle) => {
  return {
    payload: {
      id: vehicle.id,
      name: vehicle.name
    }
  }
})
