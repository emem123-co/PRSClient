import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import NavMenu from "./NavMenu";

function NotFound() {
	return (
		<>
			<div>
				<Header />
			</div>
			<div className="min-vh-100 d-flex">
				<NavMenu />
				<div className="w-100">
					<p>Oops. Looks like this page does not exisit. Please choose from navigation on the left.</p>
				</div>
			</div>
		</>
	);
}

export default NotFound;
