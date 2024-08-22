import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
function NavMenu() {
	return (
		<>
			<div className="d-flex bg-secondary-subtle min-vh-100 navcustom">
				<main className="pt-3 bg-secondary-subtle">
					<nav>
						<ul className="nav flex-column nav-pills px-4">
							

							<li className="nav-item">
								<NavLink className="nav-link" to="/requests">
									Requests
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/products">
									Products
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/vendors">
									Vendors
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/users">
									Users
								</NavLink>
							</li>
						</ul>
					</nav>
				</main>
			</div>
		</>
	);
}

export default NavMenu;
