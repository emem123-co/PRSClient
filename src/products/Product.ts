import { Vendor } from "../vendors/Vendor";

export class Product {
	id: number | undefined;
	partNbr = "";
	name = "";
	price = "";
	unit = "";
	photoPath = "";
	vendorId = "";
	vendor = Vendor;
	

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.code) this.partNbr = initializer.partNbr;
		if (initializer.name) this.name = initializer.name;
		if (initializer.address) this.price = initializer.price;
		if (initializer.city) this.unit = initializer.unit;
		if (initializer.state) this.photoPath = initializer.photoPath;
		if (initializer.zip) this.vendorId = initializer.vendorId;
		if (initializer.phone) this.vendor = initializer.Vendor;
	}
}
