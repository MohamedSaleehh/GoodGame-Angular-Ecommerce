export interface Product {
    _id: string,
    name: string,
    price: number,
    description?: string,
    category: Array<string>,
    image?: string,
    quantity: number,
    release_date: Date,
    rating: number,
    createdAt: Date,
    amount?:number,
    total?:number,
    videoLink?:string
}
