import {WithBookstoreService} from '../hoc'
import {Routes, Route} from 'react-router-dom'
import ShopHeader from '../shop-header/shop-header'
import {HomePage, CartPage} from '../pages'

import './app.css'

const App = () => {
	return (
		<main role="main" className="container">
			<ShopHeader numItems={5} total={210}/>
			<Routes>
				<Route path='/' Component={HomePage} />
				<Route path='/cart' Component={CartPage } />
			</Routes>
		</main>
	)
}

export default WithBookstoreService()(App)