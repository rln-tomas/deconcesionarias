import { createAction } from '@reduxjs/toolkit'

const addCategories = createAction('category/addCategories', (categories) => {
				return {
								payload: {
									categories
								}
				}

})

export default {
	addCategories
}

