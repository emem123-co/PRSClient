import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavMenu() {
	return (
		<>
			<div className="d-flex flex-column bg-secondary-subtle">
				<main className="min-vh-100">
					<nav className="">
						<ul className="nav flex-column">
							<li className="nav-item">
								<Link className="nav-link active" to="">
									Purchases
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" to="">
									Requests
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" to="">
									Products
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" to="/vendors/VendorsListPage">
									Vendors
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" to="">
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
