// shows all RequestLine with the given RequestId
//total for RequestLine will autocalc when RequestLine are added (NOT A STRETCH)
//includes Add RequestLine Item button
import { SyntheticEvent, useEffect, useState } from "react";
import { RequestLine } from "./RequestLine";

import { Link } from "react-router-dom";
import { Product } from "../products/Product";

interface RequestLinesTableProps {
	request: Request[] | undefined;
	onRemove: (requestLines: RequestLine) => void;
}

function RequestLinesTable({ requestLines, onRemove }: RequestLinesTableProps) {
	
	return (
		<>
			<div className="container container-fluid">
				<hr className="pt-2" />
				<table className="table table-hover border border-3">
					<thead className="">
						<tr className="w-100">
							<th className="px-4">Product</th>
							<th className="pe-3">Price</th>
							<th className="pe-3">Quantity</th>
							<th className="pe-3">Line Total</th>
							<th className="pe-3">Total</th>
						</tr>
					</thead>

					{requestLines?.map((requestLine) => (
						<tbody key={requestLine.id}>
							<td className="px-4 pt-2">{requestLine.product?.name}</td>
							<td className="pe-4 pt-2">
								{requestLine.quantity && `$${requestLine.product?.price}/${requestLine.product?.unit}`}
							</td>
							<td className="pe-4 pt-2">{requestLine.quantity}</td>
							<td className="pe-4 pt-2">${(requestLine.product.price ?? 0) * (requestLine.quantity ?? 0)}</td>
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
							{/* <td>${requestLine.request.total}</td> */}
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
