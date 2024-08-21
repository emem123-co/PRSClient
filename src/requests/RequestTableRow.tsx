import { Link } from "react-router-dom";
import { Request } from "./Request";
import { SyntheticEvent } from "react";

interface MovieTableRowProps {
  request: Request;
  onRemove: (request: Request) => void;
}

function MovieTableRow({ request, onRemove }: MovieTableRowProps) {
  return (
    <tr>
      <td>
        <Link to={`/movies/detail/${request.id}`}>{request.description}</Link>
      </td>
      <td>
        {request.id} {request.description}
      </td>
      <td>{request.status}</td>
      <td>{request.total && "$"}{request.total}</td>
      <td>
        {request.user?.firstName}{request.user?.lastName}
      </td>
      <td>
        <div className="d-flex gap-2">
          <Link className="small" to={`/movies/edit/${request.id}`}>
            edit
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

export default MovieTableRow;