import { User } from "../users/User";
import { RequestLine }  from "../requestlines/RequestLine"

export class Request {
	id: number | undefined;
	description = "";
	justification = "";
	rejectionReasoning = "";
	deliveryMode = "";
	status = "";
	userId: number | undefined;
	user: User | undefined;
	requestlines: RequestLine[] | undefined;

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.description) this.description = initializer.description;
		if (initializer.justification) this.justification = initializer.justification;
		if (initializer.rejectionReasoning) this.rejectionReasoning = initializer.rejectionReasoning;
		if (initializer.deliveryMode) this.deliveryMode = initializer.deliveryMode;
		if (initializer.status) this.status = initializer.status;
		if (initializer.userId) this.userId = initializer.userId;
		if (initializer.user) this.user = initializer.user;
		if (initializer.requestlines) this.requestlines = initializer.requestlines;
	}
}
