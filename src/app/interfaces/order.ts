import { Product } from "./product";

export interface Order {
	_id: string,
	status: boolean,
	user_id: string,
	total_price: number,
	products:Array<{product:Product,amount:number}>
}
