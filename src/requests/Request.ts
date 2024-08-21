import { User } from "../users/User";
// import { RequestLines } from "../requestlines/requestline;

export class Request {
	id: number | undefined;
	partNbr = "";
	name = "";
	price = "";
	unit = "";
	photoPath = "";
	userId: number | undefined;
	user: User | undefined;
	// requestlines: Requestlines[] | undefined;

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.partNbr) this.partNbr = initializer.partNbr;
		if (initializer.name) this.name = initializer.name;
		if (initializer.price) this.price = initializer.price;
		if (initializer.unit) this.unit = initializer.unit;
		if (initializer.photoPath) this.photoPath = initializer.photoPath;
		if (initializer.userId) this.userId = initializer.userId;
		if (initializer.user) this.user = initializer.user;
		if (initializer.requestline) this.requestlines = initializer.requestline;
	}
}
