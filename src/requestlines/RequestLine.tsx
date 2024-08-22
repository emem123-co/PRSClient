import { ReactNode } from "react";
import { Product } from "../products/Product";
import { Request } from "../requests/Request";

export class RequestLine {
  
	
	id: number | undefined;
	
	requestID: number | undefined;
	request: Request | undefined;

   productID: number | undefined;
   product: Product | undefined;
   quantity = 0
   total: ReactNode;

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.requestID) this.requestID = initializer.requestID;
		if (initializer.request) this.request = initializer.request;
		if (initializer.productID) this.productID = initializer.productID;
		if (initializer.product) this.product = initializer.product;
		if (initializer.quantity) this.quantity = initializer.quantity;
		
	}
}