import { Link } from "react-router-dom";
import { Vendor } from "./Vendor";
import { SyntheticEvent } from "react";

interface VendorCardProps {
	vendor: Vendor;
	onRemove: (vendor: Vendor) => void;
}

function VendorCard({ vendor, onRemove }: VendorCardProps) {
	return (
		<div className="d-flex">
			<div className="card " key={vendor.id}>
				<div className="card-header bg-primary"></div>
				<div className="card-body bg-white">
					<h5 className="card-title">{vendor.name}</h5>

					<div className="card-text">{vendor.address}</div>
					<div className="card-text">
						{vendor.city}, {vendor.state}
					</div>
					<div className="card-text">{vendor.zip}</div>
					<div className="card-text">{vendor.phone}</div>
					<small className="card-text">{vendor.email}</small>
					<div className="d-flex gap-2 pt-3">
						<Link className="card-link p-0" to={`/vendors/edit/${vendor.id}`}>
							edit
						</Link>
						<a
							className="card-link p-0"
							onClick={(event: SyntheticEvent) => {
								event.preventDefault();
								onRemove(vendor);
							}}
						>
							delete
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default VendorCard;
