import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { useNavigate, useParams } from "react-router-dom";
import { requestAPI } from "./RequestAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Request } from "../requests/Request";

function RequestForm() {
	let { requestId: requestIdAsString } = useParams<{ requestId: string }>();
	let requestId = Number(requestIdAsString);
	const navigate = useNavigate();
	const [request, setRequest] = useState<Request[]>([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Request>({
		defaultValues: async () => {
			let requestData = await requestAPI.list();
			setRequest(requestData);

			if (!requestId) {
				let newRequest = new Request();
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
				navigate(`/details/${requestId}`);
			} else {
				await requestAPI.put(request);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return <></>;
}

export default RequestForm;
