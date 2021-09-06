import { configureStore } from '@reduxjs/toolkit'
import reducers from '../reducers'

export default configureStore({
  reducer: {
    category: reducers.categoryReducer,
    property: reducers.propertyReducer,
    vehicle: reducers.vehicleReducer
  }
})
