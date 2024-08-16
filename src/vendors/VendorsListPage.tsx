import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";

function VendorsListPage() {
	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<p className="d-flex justify-content-between align-items-center m-0 px-1">
						<h4 className="m-0 fw-light fs-5">VENDORS</h4>
						<Link className="btn btn-primary fw-light fs-6" to="./CreateVendorPage">
							ADD VENDOR
						</Link>
					</p>

					<div className="d-flex flex-wrap gap-4 pt-3">
						<div className="card p-3 shadow-lg">
							<h4 className="card-title fs-5 fw-normal">Vendor Name</h4>
							<div className="card-body p-0">
								<address className="card-text ">
									1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
								</address>
								<div className="d-flex justify-content-end">
									<Link to="./editvendorpage" className="btn btn p-1 fs-6">
										edit
									</Link>
								</div>
							</div>
						</div>

						<div className="card p-3 shadow-lg">
							<h4 className="card-title fs-5 fw-normal">Vendor Name</h4>
							<div className="card-body p-0">
								<address className="card-text">
									1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
								</address>
								<div className="d-flex justify-content-end">
									<Link to="./EditVendorPage" className="btn btn p-1 fs-6">
										edit
									</Link>
								</div>
							</div>
						</div>

						<div className="card p-3 shadow-lg">
							<h4 className="card-title fs-5 fw-normal ">Vendor Name</h4>
							<div className="card-body p-0">
								<address className="card-text">
									1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
								</address>
								<div className="d-flex justify-content-end">
									<Link to="./EditVendorPage" className="btn btn p-1 fs-6">
										edit
									</Link>
								</div>
							</div>
						</div>

						<div className="card p-3 shadow-lg">
							<h4 className="card-title fs-5 fw-normal">Vendor Name</h4>
							<div className="card-body p-0">
								<address className="card-text">
									1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
								</address>
								<div className="d-flex justify-content-end">
									<Link to="./EditVendorPage" className="btn btn p-1 fs-6">
										edit
									</Link>
								</div>
							</div>
						</div>

						<div className="card p-3 shadow-lg">
							<h4 className="card-title fs-5 fw-normal">Vendor Name</h4>
							<div className="card-body p-0">
								<address className="card-text">
									1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
								</address>
								<div className="d-flex justify-content-end">
									<Link to="./EditVendorPage" className="btn btn p-1 fs-6">
										edit
									</Link>
								</div>
							</div>
						</div>

						<div className="card p-3 shadow-lg">
							<h4 className="card-title fs-5 fw-normal">Vendor Name</h4>
							<div className="card-body p-0">
								<address className="card-text">
									1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
								</address>
								<div className="d-flex justify-content-end">
									<Link to="./EditVendorPage" className="btn btn p-1 fs-6">
										edit
									</Link>
								</div>
							</div>
						</div>

						<div className="card p-3 shadow-lg">
							<h4 className="card-title fs-5 fw-normal">Vendor Name</h4>
							<div className="card-body p-0">
								<address className="card-text">
									1016 Center Street Ashland, OH 44804 8002347834 support@vendorname.com
								</address>
								<div className="d-flex justify-content-end">
									<Link to="./EditVendorPage" className="btn btn p-1 fs-6">
										edit
									</Link>
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
