// shows all RequestLine with the given RequestId
//total for RequestLine will autocalc when RequestLine are added (NOT A STRETCH)
//includes Add RequestLine Item button
import { SyntheticEvent, useEffect, useState } from "react";
import { RequestLine } from "./RequestLine";

import { Link } from "react-router-dom";

interface RequestLinesTableProps {
	requestLines: RequestLine[] | undefined;
	onRemove: (requestLines: RequestLine) => void;
}

function RequestLinesTable({ requestLines, onRemove }: RequestLinesTableProps) {
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
							<th className="pe-4">Request Total</th>
						</tr>
					</thead>

					{requestLines?.map((requestLine) => (
						<tbody key={requestLine.id}>
							<td className="px-4 pt-2">{requestLine.product?.name}</td>
							<td className="pe-4 pt-2">
								{requestLine.quantity && `$${requestLine.product?.price}/${requestLine.product?.unit}`}
							</td>
							<td className="pe-4 pt-2">{requestLine.quantity}</td>
							<td className="pe-4 pt-2">
								{/* <div className="multiply">{requestLine.product?.price * requestLine.quantity}</div> */}
							</td>
							<td className="pe-4 pt-2">{requestLine.request?.total}</td>
							<td className="pe-4 pt-2">
								<div className="ps-4 pt-2 d-flex gap-3">
									<Link className="small" to={`/requests/detail/${requestLine.requestID}/edit/${requestLine.id}`}>
										edit
									</Link>
									<a
										className="small"
										onClick={(event: SyntheticEvent) => {
											event.preventDefault();
											onRemove(requestLine);
										}}
									>
										delete
									</a>
								</div>
							</td>
						</tbody>
					))}
				</table>
				<div className=" justify-content-end">
					<div className="">
						<Link type="button" className="btn btn-outline-secondary w-100" to="./requestlines/create">
							+ Items
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default RequestLinesTable;
