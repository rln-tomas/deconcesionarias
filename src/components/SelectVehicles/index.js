import React, { useState, useEffect } from 'react'
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import { useStyles } from './styles'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import actions from '../../redux/actions'

const SelectVehicle = () => {
  const { addVehicle } = actions
  const dispatch = useDispatch()

  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [vehicles, setVehicles] = useState([])

  const getVehicles = async () => {
    const response = await axios.get('/vehicle/')
    setVehicles(response.data.data)
  }

  useEffect(() => {
    getVehicles()
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (e) => {
    const actual = vehicles.filter(vehicle => vehicle.name === e.target.value)[0]
    dispatch(addVehicle(actual))
    setValue(e.target.value)
  }

  return (
        <FormControl className={classes.formControll}>
            <InputLabel>Vehicle: </InputLabel>
            <Select
                onChange={handleChange}
                open={open}
                value={value}
                onClose={handleClose}
                onOpen={handleOpen}
            >
                {
                    vehicles.map((item, i) => {
                      return (
                            <MenuItem value={item.name} key={i}>{item.name}</MenuItem>
                      )
                    })
                }
            </Select>
        </FormControl>
  )
}

export default SelectVehicle
