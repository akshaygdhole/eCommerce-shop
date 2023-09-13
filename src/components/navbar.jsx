import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = ({ isLoggedIn, handleLogout }) => {
	return (
		<div className='navbar'>
			<div className='links'>
				<Link to='/'>Shop</Link>
				{isLoggedIn ? (
					<>
						<Link to='/cart'>
							<ShoppingCart size={32} />
						</Link>
						<button
							style={{
								padding: "4px 6px",
								marginLeft: "22px",
								background: "transparent",
								border: "none",
								color: "#fff",
								borderRadius: "2px",
								fontSize: "25px",
								outline: "none",
								cursor: "pointer",
							}}
							onClick={handleLogout}
						>
							Logout
						</button>
					</>
				) : (
					<Link to='/login'>Login</Link>
				)}
			</div>
		</div>
	);
};
