export class User {
	id: number | undefined;
	firstName = "";
	lastName = "";
	userName = "";
	password = "";
	phone = "";
	email = "";
	isReviewer = "";
	isAdmin = "";

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.code) this.userName = initializer.userName;
		if (initializer.name) this.password = initializer.password;
		if (initializer.address) this.firstName = initializer.firstName;
		if (initializer.city) this.lastName = initializer.lastName;
		if (initializer.state) this.phone = initializer.phone;
		if (initializer.zip) this.email = initializer.email;
		if (initializer.phone) this.isReviewer = initializer.isReviewer;
		if (initializer.email) this.isAdmin = initializer.isAdmin;
	}
}
