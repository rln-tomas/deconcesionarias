import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import TabPanel from '../Tabpanel'
import FeatureList from '../Features'
import { useStyles } from './styles'

const Panels = () => {
  const categories = useSelector(state => state.category.categories)
  const value = useSelector(state => state.category.index)
  const classes = useStyles()

  // Here I need the assessments for each property.

  return (
    <Grid xs={12} container item className={classes.container}>
      {categories.map((item, i) => {
        return (
            <TabPanel key={i} value={value} index={i}>
                <FeatureList categoryId={item.id} />
            </TabPanel>
        )
      })}

    </Grid>

  )
}

export default Panels
