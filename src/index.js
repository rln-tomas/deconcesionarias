import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import axios from 'axios' 

const accessToken = localStorage.getItem('token')
axios.defaults.headers.common.authorization = accessToken

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provide>
</React.StrictMode>	,
	document.getElementById('root')
	
)
