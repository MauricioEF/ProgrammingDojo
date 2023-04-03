// Coding Exercise.

// This is a FIFO problem. We have products arriving based on supply, and then sent to customers based on demand.

// Demand is items going out to the customers.
// Supply is items coming in from the vendors
 
// We need to match the two. I have a long description below, but that is essentially all we’re looking for.

// I’ve chosen this because it’s not a standard coding exercise that he will be able to Google the solution for.

// The idea is to see if the candidate can understand the business problem, and can write a solution with readable concise code.


 

const salesOrders = [{

  'id': 'S1',

  'created': '2020-01-02',

  'quantity': 6

}, {

  'id': 'S2', 

  'created': '2020-11-05',

  'quantity': 2 

}, {

  'id': 'S3', 

  'created': '2019-12-04',

  'quantity': 3 

}, {

  'id': 'S4', 

  'created': '2020-01-20',

  'quantity': 2 

}, {

  'id': 'S5', 

  'created': '2019-12-15',

  'quantity': 9 

}];

 

const purchaseOrders = [{

  'id': 'P1', 

  'receiving': '2020-01-04',

  'quantity': 4

}, {

  'id': 'P2', 

  'receiving': '2020-01-05',

  'quantity': 3 

}, {

  'id': 'P3', 

  'receiving': '2020-02-01',

  'quantity': 5 

}, {

  'id': 'P4', 

  'receiving': '2020-03-05',

  'quantity': 1 

}, {

  'id': 'P5', 

  'receiving': '2020-02-20',

  'quantity': 7

}];

 

 

// Sales Orders are orders created by a customer for us to provide a product

// This is the demand.

// 'created': when the sales order was created

// 'quantity': how many items the customer wants

 

// Purchase Orders are orders created by us to receive a product

// This is the supply.

// 'receiving': when we expect to receive the product

// 'quantity': how many we will be receiving

 

// We want to supply the products to the customers in the order in which

// they were requested.

 

// Implement the function 'allocate'.

// The function should return an Array of elements. Each element should include

// -> the ID of the sales order

// -> the date the customer should expect to get the item

 

// Additional

// - we only send the product once we have enough for that sales order

// - (so if the sales order is for 2, we need to have 2 available before sending)

// - the function should support any number of sales orders or purchase orders

// - to make it simple we only have one product

 

function allocate(salesOrders, purchaseOrders) {
}