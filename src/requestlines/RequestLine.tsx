import { Product } from "../products/Product";
import { Request } from "../requests/Request";

export class RequestLine {
	id: number | undefined;
	
	requestId: number | undefined;
	request: Request | undefined;

   productId: number | undefined;
   product: Product | undefined;
   quantity = ""

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.requestid) this.requestId = initializer.requestid;
		if (initializer.request) this.request = initializer.request;
		if (initializer.productid) this.productId = initializer.productid;
		if (initializer.product) this.product = initializer.product;
		if (initializer.quantity) this.quantity = initializer.quantity;
		
	}
}