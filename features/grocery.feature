Feature: Grocery API Testing

  Scenario: Successfully fetch products
    When I send a GET request to the products API
    Then I should receive a 200 status code
    Then I should have product id

  Scenario: Retrieve the specific product
    When I send a GET request to the specific product
    Then I should receive a 200 status code
    Then I should have product id and product label

  Scenario: Create a cart and validate card id property exist
    When I send a POST request to create a new cart
    Then I should receive a 201 status code
    Then Cart response should contain created and cart id property

  Scenario: Add item into cart
    When I send a POST request to add items in cart
    Then I should receive a 201 status code
    Then I assert itemId and created property should be in response

  Scenario: Modified items from cart
    When I send PATCH request to modified cart items
    Then I should receive a 204 status code

  Scenario: Delete items from cart
    When I send DELETE request to delete cart
    Then I should receive a 204 status code

  

  

