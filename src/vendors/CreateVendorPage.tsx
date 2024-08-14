import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import NavMenu from "../NavMenu";
import Header from "../Header";

function CreateVendorPage() {
	return (
		<>
			<div className="min-hw-100 d-flex">
				<Header />
			</div>
			<div>
			<div className="min-vh-100 d-flex">
				<NavMenu />
			</div>
				<p>Insert Form Component Here</p>
			</div>
		</>

)}
export default CreateVendorPage;
