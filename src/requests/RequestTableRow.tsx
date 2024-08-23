import { Link } from "react-router-dom";
import { Request } from "./Request";
import { SyntheticEvent } from "react";

interface RequestTableRowProps {
  request: Request;
  onRemove: (request: Request) => void;
}

function RequestTableRow({ request, onRemove }: RequestTableRowProps) {
  return (
    <tr>
      <td>
         {request.id}
      </td>
      <td>
        <Link to={`/requests/detail/${request.id}`}>{request.description}</Link>
      </td>
      <td>{request.status}</td>
      <td>{request.total && "$"}{request.total}</td>
      <td>
        {request.user?.firstName}{"  "}{request.user?.lastName}
      </td>
      <td>
        <div className="d-flex gap-2">
          <Link className="small" to={`/requests/detail/${request.id}`}>
            review
          </Link>
          |
          <a
            className="small"
            onClick={(event: SyntheticEvent) => {
              event.preventDefault();
              onRemove(request);
            }}
          >
            delete
          </a>
        </div>
      </td>
    </tr>
  );
}

export default RequestTableRow;