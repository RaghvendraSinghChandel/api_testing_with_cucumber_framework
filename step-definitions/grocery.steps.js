const { When, Then } = require('@cucumber/cucumber');
const Grocery = require('../pages/grocery');
const expect = require('chai').expect;
const CollectionVariable = require("../utils/collectionVariable");

const collection = new CollectionVariable();
let response;
const grocery = new Grocery();

When('I send a GET request to the products API', async () => {
    response = await grocery.getProduct();   
});

When('I send a GET request to the specific product', async () => {
    response = await grocery.getSpecificProduct(collection.get("product_id"));
});

When('I send a POST request to create a new cart', async () => {
    response = await grocery.createNewCart();
});

When('I send a POST request to add items in cart', async ()=> {
    const payload = {
        productId: collection.get("product_id")
    }

    response = await grocery.addItemInCart(collection.get("cart_id"), payload)

})

When('I send PATCH request to modified cart items', async ()=> {
   const cartId = collection.get("cart_id")
   const itemId = collection.get("item_id")
   const quantity = 2
   response = await grocery.modifiedItemInCart(cartId, itemId, quantity)

})

When('I send DELETE request to delete cart', async()=> {
    const cartId = collection.get("cart_id")
    const itemId = collection.get("item_id")
    response = await grocery.deleteItem(cartId, itemId)
})

Then('I should receive a {int} status code', (statusCode) => {
    expect(response.status).to.equal(statusCode);
});

Then('I should have product id', () => {
    const responseData = response.data;

    const { id, category, name } = responseData[0];
    const {id2, category2, name2} = responseData[1]
    collection.set("product_id", id);
    collection.set("category", category);
    collection.set("name", name);
    collection.set("product_id2", id2);
    collection.set("category2", category2);
    collection.set("name2", name2);
});

Then('I should have product id and product label', () => {
    const responseData = response.data;
    const id = collection.get("product_id");

    expect(responseData).to.have.property("price");
    const name = collection.get("name");
    const category = collection.get("category");

    expect(responseData.id).to.equal(id);
    expect(responseData.name).to.equal(name);
    expect(responseData.category).to.eql(category);

    collection.set("price", responseData.price);
});

Then('Cart response should contain created and cart id property', ()=> {
     const responseData = response.data
     expect(responseData.created).to.equal(true)
     expect(responseData).to.have.property('cartId')
     collection.set("cart_id", responseData.cartId)
})

Then('I assert itemId and created property should be in response', ()=> {
    const responseData = response.data
    expect(responseData.created).to.equal(true)
    expect(responseData).to.have.property('itemId')
    collection.set("item_id", responseData.itemId)
})
