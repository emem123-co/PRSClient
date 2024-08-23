export class Vendor {
	id: number | undefined;
	code = "";
	name = "";
	address = "";
	city = "";
	state = "";
	zip = "";
	phone = "";
	email = "";
	filter: any;

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.code) this.code = initializer.code;
		if (initializer.name) this.name = initializer.name;
		if (initializer.address) this.address = initializer.address;
		if (initializer.city) this.city = initializer.city;
		if (initializer.state) this.state = initializer.state;
		if (initializer.zip) this.zip = initializer.zip;
		if (initializer.phone) this.phone = initializer.phone;
		if (initializer.email) this.email = initializer.email;
	}
}
