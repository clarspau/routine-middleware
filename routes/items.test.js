// Set environment to 'test'
process.env.NODE_ENV = "test";

// Import necessary npm packages and app
const request = require("supertest");
const app = require("../app");

// Import the fake database
let items = require("../fakeDb");

// Sample item for testing
let item = { name: "hoka", price: 333 };

// Before each test, add the sample item to the fake database
beforeEach(() => {
     items.push(item);
});

// After each test, clear the fake database
afterEach(() => {
     items = [];
});

/** 
 * Test suite for GET /items endpoint.
 * Returns `{items: [item, ...]}`
 */
describe("GET /items", () => {
     test("Gets a list of items", async () => {
          const response = await request(app).get(`/items`);
          const { items } = response.body;
          expect(response.statusCode).toBe(200);
          expect(items).toHaveLength(1);
     });
});

/** 
 * Test suite for GET /items/:name endpoint.
 * Returns data about one item: `{item: item}`
 */
describe("GET /items/:name", () => {
     test("Gets a single item", async () => {
          const response = await request(app).get(`/items/${item.name}`);
          expect(response.statusCode).toBe(200);
          expect(response.body.item).toEqual(item);
     });

     test("Responds with 404 if can't find item", async () => {
          const response = await request(app).get(`/items/0`);
          expect(response.statusCode).toBe(404);
     });
});

/** 
 * Test suite for POST /items endpoint.
 * Creates a new item from data; returns `{item: item}`
 */
describe("POST /items", () => {
     test("Creates a new item", async () => {
          const response = await request(app)
               .post(`/items`)
               .send({
                    name: "Taco",
                    price: 0
               });
          expect(response.statusCode).toBe(200);
          const newItem = response.body.item;
          expect(newItem).toHaveProperty("name", "Taco");
          expect(newItem).toHaveProperty("price", 0);
     });
});

/** 
 * Test suite for PATCH /items/:name endpoint.
 * Updates an item; returns `{item: item}`
 */
describe("PATCH /items/:name", () => {
     test("Updates a single item", async () => {
          const response = await request(app)
               .patch(`/items/${item.name}`)
               .send({
                    name: "Troll"
               });
          expect(response.statusCode).toBe(200);
          expect(response.body.item).toEqual({ name: "Troll" });
     });

     test("Responds with 404 if can't find item", async () => {
          const response = await request(app).patch(`/items/0`);
          expect(response.statusCode).toBe(404);
     });
});

/** 
 * Test suite for DELETE /items/:name endpoint.
 * Deletes an item; returns `{message: "Deleted"}`
 */
describe("DELETE /items/:name", () => {
     test("Deletes a single item", async () => {
          const response = await request(app)
               .delete(`/items/${item.name}`);
          expect(response.statusCode).toBe(200);
          expect(response.body).toEqual({ message: "Deleted" });
     });
});
