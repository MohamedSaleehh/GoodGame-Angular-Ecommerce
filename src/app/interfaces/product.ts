export interface Product {
    _id: String,
    name: String,
    price: Number,
    description?: String,
    category: Array<String>,
    image?: String,
    quantity: Number,
    release_date: Date,
}
