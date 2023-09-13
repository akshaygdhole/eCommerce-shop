import React, { useContext } from "react";
// import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
	const { products } = useContext(ShopContext);
	return (
		<div className='shop'>
			<h4 style={{ textAlign: "center" }}>Todo: Required bit of Debuging Add to Cart Button Adding All the Products in the cart</h4>

			<p style={{ textAlign: "center" }}>Note: Time is not enough to complete the Task All the functionality is working fine but not able to complete the task</p>
			<p style={{ textAlign: "center" }}>Issue:
				I encountered a bug while working on the "Add to Cart" button functionality</p>
			<p style={{ textAlign: "center" }}>I will complete the task as soon as possible</p>
			

			<div className='shopTitle'>
				<h1 style={{margin:"10px 10px"}}>ECommerce Shop</h1>
			</div>

			<div className='products'>
				{products?.map((product) => (
					<Product data={product} />
				))}
			</div>
		</div>
	);
};
