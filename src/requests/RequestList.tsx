import { useEffect, useState } from "react";
import { Request } from "./Request";
import { requestAPI } from "./RequestAPI";
import RequestTableRow from "./RequestTableRow";
import toast from "react-hot-toast";


function RequestList() {
	const [requests, setRequests] = useState<Request[]>([]);
	const [busy, setBusy] = useState(false);
	

	async function loadRequests() {
		try {
		setBusy(true);
		let data = await requestAPI.list();
		setRequests(data);
	} catch (error: any) {
		toast.error(error.message);
	} finally {
		setBusy(false);
	}
}

	useEffect(() => {
		loadRequests();
	}, []);

	async function remove(request: Request) {
		if (confirm("Are you sure you want to delete this request?")) {
		  if (request.id) {
			 await requestAPI.delete(request.id);
			 let updatedRequests = requests.filter((r) => r.id !== request.id);
			 setRequests(updatedRequests);
			 toast.success("Successfully deleted.");
		  }
		}
	 }

	 
		
		return (
			<>
				{busy && (
					<section className="d-flex justify-content-center align-items-center align-content-center vh-100">
						<div className=" spinner-border text-primary" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
        			</section>
      )}
		<table className="table table-hover w-75">
					<thead>
						<tr>
							<th>#</th>
							<th>Description</th>
							<th>Status</th>
							<th>Total</th>
							<th>Requested By</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{requests.map((request) => (
							<RequestTableRow key={request.id} request={request} onRemove={remove} />
							
						))}
					</tbody>
					</table>
			</>
	)
}

export default RequestList;


