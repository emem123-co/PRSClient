import { Link } from "react-router-dom";
import { SyntheticEvent, onRemove } from "react";
import { RequestLines } from "./RequestLines";

interface RequestLineRowProps {
	requestLine: RequestLines;
	onRemove: (requestLine: RequestLines) => void;
}

function RequestLineRow({ requestLine, onRemove }: RequestLineRowProps) {
	return (
		<tr>
			<td>{requestLine.product?.name}</td>
			<td>{requestLine.quantity && `$${requestLine.product?.price}/${requestLine.product?.unit}`}</td>
			<td>{requestLine.quantity}</td>
			<tr>{requestLine.request?.total}</tr>
			<div className="d-flex gap-2">
			<div>
				<Link className="small" to={`./create`}>
					Add an item...
				</Link>
			</div>
				<a
					className="small"
					onClick={(event: SyntheticEvent) => {
						event.preventDefault();
						onRemove(requestLine);
					}}
				>
					delete
				</a>
				{/* <Link className="small" to={`./edit/${requestLine.id}`}>
            edit item
          </Link>
          | */}
			</div>
		</tr>
	);
}

export default RequestLineRow;
