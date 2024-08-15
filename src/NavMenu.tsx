import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

function NavMenu() {
	return (
		<>
			<div className="d-flex flex-column bg-secondary-subtle">
				<main className="pt-2 bg-secondary-subtle">
					<nav className="">
						<ul className="nav flex-column">
							<li className="nav-item">
								<Link className="nav-link" to={""}>
									Purchases
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to={""}>
									Requests
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to={""}>
									Products
								</Link>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to={"/vendors"}>
									Vendors
								</NavLink>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={""}>
									Users
								</Link>
							</li>
						</ul>
					</nav>
				</main>
			</div>
		</>
	);
}

export default NavMenu;
