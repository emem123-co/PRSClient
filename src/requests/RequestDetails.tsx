//requestlinestable in body

//when request is new, add send for review button in the top right
//when request is in review, add approve / reject buttons on requests that dont belong to the currently logged in user
//if user owns request, add message that says you cannont review your own requests
//if user is not review, add message that says they dont have permission to review requests (or just disable approve/reject buttons)

//if reject button is clicked, add rejection reason

import RequestLinesTable from "../requestlines/RequestLinesTable";
import { useState, useEffect } from "react";
import { requestAPI } from "./RequestAPI";
import { Request } from "./Request";


function RequestDetails(request: Request) {
	const [requests, setRequests] = useState<Request[]>([]);
	const [busy, setBusy] = useState(false);



	async function loadRequest() {
		if (request.id) {
			setBusy(true);
			let currentRequest = await requestAPI.find(request.id);
			setRequests(currentRequest);
			setBusy(false);
		}
	}

	useEffect(() => {
		loadRequest();
	}, []);

	


	return (
		<>
			<section className="container-fluid bg-white">
				<div className="d-flex justify-content-between align-items-center m-0 px-1">
					


						

				<div className="p-2">
					<div>
						Description
						<small>{request.description}</small>
					</div>

					<div>
						Justification
						<small>{request.justification}</small>
					</div>

					<div>
						Delivery Method
						<small>{request.deliveryMode}</small>
					</div>

					<div>
						Status
						<small>{request.status}</small>
					</div>

					<div>
						Requested By
						<small>
							<span>
								{request.user?.firstName}
								{request.user?.lastName}
							</span>
						</small>
					</div>
					<div>
						<RequestLinesTable />
					</div>
				</div>
			</div>
		</section>
		</>
	)
};
					
			
export default RequestDetails;
