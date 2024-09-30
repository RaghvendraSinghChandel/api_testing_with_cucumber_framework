const ApiService = require('../services/apiServices');

class Grocery {
    constructor() {
        this.apiService = new ApiService();
        this.getProducts = '/products';
        this.createCart = '/carts'
    }

    async getProduct() {
        return await this.apiService.get(this.getProducts);
    }

    async getSpecificProduct(productid) {
        return await this.apiService.get(`${this.getProducts}/${productid}`)
    }

    async createNewCart() {
        return await this.apiService.post(this.createCart)
    }

    async addItemInCart(cartId, payload) {
        
        return await this.apiService.post(`${this.createCart}/${cartId}/items`, payload)

    }

    async modifiedItemInCart(cartId, itemId, quantity) {
        const data = {
            quantity: quantity
        }
        return await this.apiService.patch(`${this.createCart}/${cartId}/items/${itemId}`, data)
    }

    async deleteItem(cartId, itemId) {
        return await this.apiService.delete(`${this.createCart}/${cartId}/items/${itemId}`)
    } 
}

module.exports = Grocery;
