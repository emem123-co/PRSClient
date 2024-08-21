import { Link } from "react-router-dom";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App";
import {Request} from "../requests/Request"



function RequestDetail(request: Request) {
   return (
      <>
      <div className="d-flex justify-items-between">
         <h1>Request Details</h1>
         <button type="button" className="btn btn-primary">Send for Review</button>
         <Link to={`/products/edit/${request.id}`}>Edit Request</Link>
      </div>
      <div>
         <div>Description
            <small>{request.description}</small>
         </div>

         <div>Justification
            <small>{request.justification}</small>
         </div>

         <div>Delivery Method
            <small>{request.deliveryMode}</small>
         </div>

         <div>Status
            <small>{request.status}</small>
         </div>

         <div>Requested By
            <small><span>{request.user?.firstName}{request.user?.lastName}</span></small>
         </div>
      </div>
      </>
   )
}

export default RequestDetail;