export interface Product {
    _id: any,
    name: string,
    price: number,
    description?: string,
    category: Array<string>,
    image?: string,
    quantity: number,
    release_date: Date,
    amount?:any
}
