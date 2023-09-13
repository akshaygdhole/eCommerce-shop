import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
	const [products, setProducts] = useState([]);

	const getDefaultCart = () => {
		let cart = {};
		for (let i = 1; i < products.length + 1; i++) {
			cart[i] = 0;
		}
		return cart;
	};
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = products.find(
					(product) => product.id === Number(item)
				);
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}
		return totalAmount;
	};

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};

	const checkout = () => {
		setCartItems(getDefaultCart());
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("https://dummyjson.com/products");
				const data = await response.json();
				setProducts(data.products);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);

	const contextValue = {
		products,
		cartItems,
		addToCart,
		updateCartItemCount,
		removeFromCart,
		getTotalCartAmount,
		checkout,
	};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
