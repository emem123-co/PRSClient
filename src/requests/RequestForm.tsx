import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { requestAPI } from "./RequestAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Request } from "../requests/Request";
import { User } from "../users/User";
import { useUserContext } from "../users/UserContext";

function RequestForm() {
	let { requestId: requestIdAsString } = useParams<{ requestId: string }>();
	let requestId = Number(requestIdAsString);
	const navigate = useNavigate();
	const [request, setRequest] = useState<Request[]>([]);

	const [users, setUsers] = useState<User[]>([]);
	const { user } = useUserContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Request>({
		defaultValues: async () => {
			if (!requestId) {
				let newRequest = new Request({ userId: user?.id });
				return Promise.resolve(newRequest);
			} else {
				return await requestAPI.find(requestId);
			}
		},
	});

	const save: SubmitHandler<Request> = async (request) => {
		try {
			if (request.isNew) {
				await requestAPI.post(request);
				toast.success("Success!");
				navigate(`/requests`);
			} else {
				await requestAPI.put(request);
				toast.success("Success!");
				navigate(`/requests`);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};
	return (
		<>
			<div className="container-fluid bg-white">
				<div className="d-flex fw-normal fs-6">
					<form onSubmit={handleSubmit(save)} className="d-flex flex-wrap flex-row w-75 border-0">
						<div className="d-flex row-1 gap-3 w-100">
							<div className="d-flex flex-column w-25">
								<label className="form-label" htmlFor="name">
									Description
								</label>
								<input
									className={`form-control ${errors.description ? "is-invalid" : ""}`}
									{...register("description", { required: "Description is required." })}
									type="text"
									id="name"
								/>
							</div>
						</div>

						<div className="pt-3 d-flex flex-column w-100">
							<div className="d-flex flex-column py-4 pe-4">
								<label className="form-label w-100" htmlFor="justification">
									Justification
								</label>
								<input
									className={`form-control w-100 ${errors.justification ? "is-invalid" : ""}`}
									{...register("justification", { required: "Justification is required." })}
									type="text"
									id="justification"
								/>
								<div className="invalid-feedback">{errors.justification?.message}</div>
							</div>
						</div>

						<div className="d-flex w-100">
							<div className="w-25 py-3 pe-4">
								<label className="form-label" htmlFor="deliveryMode">
									Delivery Method
								</label>
								<select
									className={`form-select ${errors.deliveryMode ? "is-invalid" : ""}`}
									{...register("deliveryMode", { required: "Delivery Method is required." })}
									id="deliveryMode"
									defaultValue={"Pickup"}
								>
									<option value="pickup">Pickup</option>
									<option value="delivery">Delivery</option>
								</select>
								<div className="invalid-feedback">{errors.deliveryMode?.message}</div>
							</div>
							<div className="d-flex flex-column w-25 p-3">
								<label className="form-label" htmlFor="status">
									Status
								</label>
								<select
									className={`form-select ${errors.status && "is-invalid"}`}
									id="status"
									defaultValue="NEW"
									{...register("status", { required: "Status Required" })}
								>
									<option value="NEW">NEW</option>
									<option value="REVIEW">REVIEW</option>
									<option value="APPROVED">APPROVED</option>
									<option value="REJECTED">REJECTED</option>
								</select>
								<div className="invalid-feedback">{errors.status?.message}</div>
							</div>

							<div className="d-flex flex-column w-25 p-3 ">
								<label className="form-label" htmlFor="userId">
									Requested By
								</label>
								<label
									disabled
									id="user"
									{...register("userId", { required: "Requested by is Required" })}
									className={`form-select ${errors.userId && "is-invalid"}`}
								>
									{user?.firstName} {user?.lastName}
								</label>
								<div className="invalid-feedback">{errors.userId?.message}</div>
								<div className="d-flex justify-content-end">
									<div className="py-4 d-flex align-content-end">
										<button type="submit" className="btn btn-primary fw-light fs-6" onSubmit={handleSubmit(save)}>
											Save
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default RequestForm;
