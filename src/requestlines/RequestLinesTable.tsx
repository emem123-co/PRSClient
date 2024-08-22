// shows all RequestLine with the given RequestId
//total for RequestLine will autocalc when RequestLine are added (NOT A STRETCH)
//includes Add RequestLine Item button
import { SyntheticEvent, useEffect, useState } from "react";
import { RequestLine } from "./RequestLine";

import { Link } from "react-router-dom";

interface RequestLinesTableProps {
	requestLines: RequestLine[] | undefined;
}

function RequestLinesTable({ requestLines }: RequestLinesTableProps) {
	// async function remove(requestLine: RequestLine) {
	// 	if (confirm("Are you sure you want to delete this requestlines?")) {
	// 		if (requestLine.id) {
	// 			await requestLineAPI.delete(requestLine.id);
	// 			let updatedRequestLines = requestLines.filter((rL) => rL.id !== requestLine.id);
	// 			setRequestLines(updatedRequestLines);
	// 			toast.success("Successfully deleted.");
	// 		}
	// 	}
	// }

	return (
		<>
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

					{requestLines?.map((requestLine) => (
						<tbody key={requestLine.id}>
							<td>{requestLine.product?.name}</td>
							<td>{requestLine.quantity && `$${requestLine.product?.price}/${requestLine.product?.unit}`}</td>
							<td>{requestLine.quantity}</td>
							<td>{requestLine.total}</td>
							<td>
								<div className="d-flex gap-2">
									<Link className="small" to={`./create`}>
										Add an item...
									</Link>
									<a
										className="small"
										onClick={(event: SyntheticEvent) => {
											event.preventDefault();
											remove(requestLine);
										}}
									>
										delete
									</a>
									<Link className="small" to={`./edit/${requestLine.id}`}>
										edit item
									</Link>
								</div>
							</td>
						</tbody>
					))}
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
