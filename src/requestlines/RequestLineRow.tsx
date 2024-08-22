import { Link } from "react-router-dom";
import { SyntheticEvent, onRemove } from "react";
import { RequestLine } from "./RequestLine";

interface RequestLineRowProps {
	requestLine: RequestLine;
	onRemove: (requestLine: RequestLine) => void;
}

function RequestLineRow({ requestLine, onRemove }: RequestLineRowProps) {
	return (
		<tr>
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
							onRemove(requestLine);
						}}
					>
						delete
					</a>
					<Link className="small" to={`./edit/${requestLine.id}`}>
						edit item
					</Link>
				</div>
			</td>
		</tr>
	);
}

export default RequestLineRow;
