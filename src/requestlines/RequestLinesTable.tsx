// shows all RequestLine with the given RequestId
//total for RequestLine will autocalc when RequestLine are added (NOT A STRETCH)
//includes Add RequestLine Item button
import { useEffect, useState } from "react";
import { RequestLine } from "./RequestLine";
import RequestLineRow from "../requestlines/RequestLineRow";
import toast from "react-hot-toast";
import { requestLineAPI } from "./RequestLineAPI";
import { Link } from "react-router-dom";

function RequestLinesTable() {
	const [requestLine, setRequestLine] = useState<RequestLine[]>([]);
	const [busy, setBusy] = useState(false);

	async function loadRequestLine() {
		try {
			setBusy(true);
			let data = await requestLineAPI.list();
			setRequestLine(data);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setBusy(false);
		}
	}

	useEffect(() => {
		loadRequestLine();
	}, []);

	async function remove(requestLine: RequestLine) {
		if (confirm("Are you sure you want to delete this requestlines?")) {
			if (requestLine.id) {
				await requestLineAPI.delete(requestLine.id);
				let updatedRequestLine = requestLine.filter((rL) => rL.id !== requestLine.id);
				setRequestLine(updatedRequestLine);
				toast.success("Successfully deleted.");
			}
		}
	}

	return (
		<>
			<div></div>
			{busy && (
				<section className="d-flex justify-content-center align-items-center align-content-center vh-100">
					<div className=" spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</section>
			)}
			<div className="container container-fluid">
				<hr className="pt-2" />
				<table className="table table-hover border border-3">
					<thead className="">
						<tr className="w-100">
							<th className="px-4">Product</th>
							<th className="pe-4">Price</th>
							<th className="pe-4">Quantity</th>
							<th className="pe-4">Line Total</th>
							<th className="pe-4"> </th>
						</tr>
					</thead>
					<tbody>
						{requestLine.map((requestLine) => (
							<RequestLineRow key={requestLine.id} requestLine={requestLine} onRemove={remove} />
						))}
					</tbody>
					<div className="d-flex w-100 p-4 justify-content-end">
						<Link type="button" className="btn btn-outline-secondary w-100" to="./requestlines/create">
							+ Items
						</Link>
					</div>
				</table>
			</div>
		</>
	);
}

export default RequestLinesTable;
