import React from 'react'
import { useSelector } from 'react-redux'
import TabPanel from '../Tabpanel'
import FeatureList from '../Features'

const Panels = () => {
  const categories = useSelector(state => state.category.categories)
  const value = useSelector(state => state.category.index)

  // Here I need the assessments for each property.

  return (
    categories.map((item, i) => {
      return (
          <TabPanel key={i} value={value} index={i}>
              <FeatureList categoryId={item.id} />
          </TabPanel>
      )
    })

  )
}

export default Panels
