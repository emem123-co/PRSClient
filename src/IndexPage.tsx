import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import NavMenu from "./NavMenu";

function Home() {
	return (
		<>
			<div>
				<Header />
			</div>
			<div className="min-vh-100 d-flex">
				<NavMenu />
				<div className="w-100">
					<p>This website will help you create and manage purchase requests.</p>
				</div>
			</div>
		</>
	);
}
export default Home;
