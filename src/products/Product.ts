import { Vendor } from "../vendors/Vendor";

export class Product {
	id: number | undefined;
	partNbr = "";
	name = "";
	price = "";
	unit = "";
	photoPath = "";
	vendorId: number |undefined;
	vendors: Vendor[] | undefined;
	

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
		if (initializer.vendorId) this.vendorId = initializer.vendorId;
		if (initializer.vendors) this.vendors = initializer.Vendor;
	}
}
