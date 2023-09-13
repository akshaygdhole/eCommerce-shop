import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import Login from "./pages/login";
import { ShopContextProvider } from "./context/shop-context";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div className='App'>
			<ShopContextProvider>
				<Router>
					<Navbar
						isLoggedIn={isLoggedIn}
						handleLogout={handleLogout}
					/>
					<Routes>
						{isLoggedIn ? (
							<>
								<Route path='/' element={<Shop />} />
								<Route path='/cart' element={<Cart />} />
							</>
						) : (
							<>
								<Route
									path='/'
									element={<Navigate to='/login' />}
								/>
								<Route
									path='/cart'
									element={<Navigate to='/login' />}
								/>
							</>
						)}

						<Route
							path='/login'
							element={
								isLoggedIn ? (
									<Navigate to='/' />
								) : (
									<Login handleLogin={handleLogin} />
								)
							}
						/>
					</Routes>
				</Router>
			</ShopContextProvider>
		</div>
	);
}

export default App;
