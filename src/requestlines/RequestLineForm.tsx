//New RequestLine -> will be added with the requestID
//product dropdown
//price autorenders depdning on product
//total autoupdates and renders in real time

import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { useNavigate, useParams } from "react-router-dom";
import { requestLineAPI } from "./RequestLineAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { RequestLine } from "../requestlines/RequestLine";
import { productAPI } from "../products/ProductAPI";
import { Product } from "../products/Product";

function RequestLineForm() {
	let { requestLineId: requestLineIdAsString } = useParams<{ requestLineId: string }>();
	let requestLineId = Number(requestLineIdAsString);
	const [requestLine, setRequestLine] = useState<RequestLine[]>([]);
	
	let { productID: productIDAsString } = useParams<{ productID: string }>();
	let productID = Number(productIDAsString);
	const [products, setProducts] = useState<Product[]>([]);


	let { requestID: requestIDAsString } = useParams<{ requestID: string }>();
	let requestID = Number(requestIDAsString);
	const [request, setRequest] = useState<Request[]>([]);


	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Product>({
		defaultValues: async () => {
			
			let productData = await productAPI.list();
			setProducts(productData);
			if (!requestLineId) {
				let newRequestLine = new RequestLine({requestLineId: requestLineId});
				return await Promise.resolve(newRequestLine);
			} else {
				return await requestLineAPI.find(requestLineId);
			}
			
		},
	});

	const save: SubmitHandler<RequestLine> = async (requestLine) => {
		try {
			if (requestLine.isNew) {
				await requestLineAPI.post(requestLine);
				navigate(`requests/detail/${requestID}`);
			} else {
				await requestLineAPI.put(requestLine);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};
	return (
		<>
			<div className="d-flex fw-normal fs-6"></div>
		</>
	);
}

export default RequestLineForm;
