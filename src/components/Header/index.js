import React, { useEffect } from 'react'
import { AppBar, Tabs, Tab, Icon } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import actions from '../../redux/actions'

import { useStyles } from './styles.js'

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const Header = () => {
  const dispatch = useDispatch()

  const { addCategories, setIndex } = actions

  const getCategories = async () => {
    const response = await axios.get('/category')

    dispatch(addCategories(response.data.data))
  }
  const value = useSelector(state => state.category.index)
  const categories = useSelector(state => state.category.categories)
  const classes = useStyles()

  useEffect(() => {
    getCategories()
  }, [])

  const handleChange = (e, newValue) => {
    dispatch(setIndex(newValue))
  }

  return (
      <div className={classes.root}>
        <AppBar position='static' color='default' >
          <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              variant='scrollable'
              scrollButtons='auto'>
            {
                categories.map((item, i) => {
                  return (
                    <Tab key={item.id} label={item.name}
                        {...a11yProps(i)}
                        icon={
                            <Icon>
                              <img src={item.icon} alt='#' />
                            </Icon>
                        } />
                  )
                })

            }
          </Tabs>
        </AppBar>
      </div>
  )
}

export default Header
