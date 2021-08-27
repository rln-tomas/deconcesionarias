import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Typography, Box, Icon } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from './styles.js'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const Header = () => {
  const categories = [
    {
      name: 'test',
      icon: 'https://i.ibb.co/zHW63yL/Foto-11.jpg'
    },
    {
      name: 'test 1',
      icon: 'https://i.ibb.co/zHW63yL/Foto-11.jpg'
    },
    {
      name: 'test 2',
      icon: 'https://i.ibb.co/zHW63yL/Foto-11.jpg'
    },
    {
      name: 'test 2',
      icon: 'https://i.ibb.co/zHW63yL/Foto-11.jpg'
    },
    {
      name: 'test 2',
      icon: 'https://i.ibb.co/zHW63yL/Foto-11.jpg'
    },
    {
      name: 'test 2',
      icon: 'https://i.ibb.co/zHW63yL/Foto-11.jpg'
    },
    {
      name: 'test 2',
      icon: 'https://i.ibb.co/zHW63yL/Foto-11.jpg'
    }
  ]

  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              variant='scrollable'
              scrollButtons='auto'>
            {
                categories.map((item, i) => {
                  return (
                    <Tab key={i} label={item.name}
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

        {categories.map((item, i) => {
          return (
            <TabPanel key={i} value={value} index={i}>
              {item.name}
            </TabPanel>
          )
        })}
      </div>
  )
}

export default Header
