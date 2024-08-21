// shows all RequestLines with the given RequestId
//total for RequestLines will autocalc when RequestLines are added (NOT A STRETCH)
//includes Add RequestLines Item button
import { useEffect, useState } from "react";
import { RequestLines } from "./RequestLines";
import RequestLineRow from  "../requestlines/RequestLineRow";
import toast from "react-hot-toast";
import { requestLineAPI } from "./RequestLineAPI";

function RequestLinesTable() {
      const [requestLines, setRequestLines] = useState<RequestLines[]>([]);
      const [busy, setBusy] = useState(false);
      
   
      async function loadRequestLines() {
         try {
         setBusy(true);
         let data = await requestLineAPI.list();
         setRequestLines(data);
      } catch (error: any) {
         toast.error(error.message);
      } finally {
         setBusy(false);
      }
   }
   
      useEffect(() => {
         loadRequestLines();
      }, []);
   
      async function remove(requestLine: RequestLines) {
         if (confirm("Are you sure you want to delete this requestlines?")) {
           if (requestLine.id) {
             await requestLineAPI.delete(requestLine.id);
             let updatedRequests = requestLines.filter((rL) => rL.id !== requestLine.id);
             setRequestLines(updatedRequests);
             toast.success("Successfully deleted.");
           }
         }
       }
   
      return (
            <>
            <div>
               
            </div>
               {busy && (
                    <section className="d-flex justify-content-center align-items-center align-content-center vh-100">
                     <div className=" spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                     </div>
                    </section>
         )}
         <div className="">
         <table className="table table-hover border border-3">
            <div className="">
                  <thead className="w-100">
                     Items
                     <tr className="w-100">
                        <th className="w-25">Product</th>
                        <th className="w-25">Price</th>
                        <th className="w-25">Quantity</th >
                        <th className="w-25"></th>
                        <th className="w-25">Request Total</th>
                     </tr>
                  </thead>
                  <tbody>
                     {requestLines.map((requestLines) => (
                        <RequestLineRow key={requestLines.id} requestLine={requestLines} onRemove={remove} />
                  
                     ))}
                  </tbody>
                  </div>
                  </table>
                  </div>
            </>
      )
   }

export default RequestLinesTable;