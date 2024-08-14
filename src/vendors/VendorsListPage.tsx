import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import Header from "../Header"
import NavMenu from "../NavMenu"
import { Link } from "react-router-dom";

function VendorsListPage() {
	
	return (
		<>
			<div>
				<Header />
			</div>
			<div> 
			<div className="min-vh-100 d-flex">
				<NavMenu />
			</div>
				<section className="container-fluid bg-white">
					<p className="d-flex p-4 justify-content-end">
						<Link className="btn btn-outline-primary" to="./CreateVendorPage">
							Add Vendor
						</Link>
					</p>

					<div className="">
						<div className="d-flex gap-3 card-group">
							<div className="card shadow-lg">
								<div className="card-body">
									<h4 className="card-title">Vendor Name</h4>
									<address className="card-text px-3">
										1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
									</address>
								</div>
							</div>

							<div className="card shadow-lg">
								<div className="card-body">
									<h4 className="card-title">Vendor Name</h4>
									<address className="card-text px-3">
										1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
									</address>
								</div>
							</div>

							<div className="card shadow-lg">
								<div className="card-body">
									<h4 className="card-title">Vendor Name</h4>
									<address className="card-text px-3">
										1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
									</address>
								</div>
							</div>

							<div className="card shadow-lg">
								<div className="card-body">
									<h4 className="card-title">Vendor Name</h4>
									<address className="card-text px-3">
										1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
									</address>
								</div>
							</div>

							<div className="card shadow-lg">
								<div className="card-body">
									<h4 className="card-title">Vendor Name</h4>
									<address className="card-text px-3">
										1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
									</address>
								</div>
							</div>

							<div className="card shadow-lg">
								<div className="card-body">
									<h4 className="card-title">Vendor Name</h4>
									<address className="card-text px-3">
										1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
									</address>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default VendorsListPage;
