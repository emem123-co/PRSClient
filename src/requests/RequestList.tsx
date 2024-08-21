import { useEffect, useState } from "react";
import { Request } from "./Request";
import { requestAPI } from "./RequestAPI";


function RequestList() {
	const [requests, setRequests] = useState<Request[]>([]);
	const [busy, setBusy] = useState(false);
	

	async function loadRequests() {
		setBusy(true);
		let data = await requestAPI.list();
		setRequests(data);
		setBusy(false);
	}

	useEffect(() => {
		loadRequests();
	}, []);

	return (
		<div className="container-fluid bg-white d-flex flex-wrap gap-4">
			{requests.map((request) => (
				<div className="card p-2" key={request.id}>
					<div className="d-flex flex-column">

					<strong>{request.name}</strong>
					<span>
						{request.price} / {request.unit}
					</span>

					<div className="d-flex flex-column p-0 m-0 gap-1">
						<small>{request.vendor?.name}</small> 
						<small className="d-flex justify-content-center rounded-2 text-bg-dark text-white" style={{width: 130}}>
							{request.partNbr}
						</small>
					</div>
					</div>
				</div>
			))}
			;
		</div>
	);
}
export default RequestList;

{
	/* <span>
	<Link to={`/requests/edit/${request.id}`}>edit</Link> |{" "}
	<Link to={`/requests/delete/${request.id}`}>delete</Link>
</span> */
}
