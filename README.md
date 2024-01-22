# Routing & Middleware

# Express Shopping List

This exercise is a simple JSON API application is designed to manage a shopping list using an array to store items. The items are JavaScript objects with keys for name and price. Note that the shopping list is cleared each time the server restarts.

## Setup

Before running the application, create a file called **fakeDb.js** with the following content:

```
global.items = [];

module.exports = items;

```



This file will serve as the fake database for storing items.

## Routes

### 1. **GET /items**

* Returns a list of shopping items.
* Response Example: `[{ "name": "popsicle", "price": 1.45 }, { "name": "cheerios", "price": 3.40 }]`

### 2. **POST /items**

* Accepts JSON data and adds it to the shopping list.
* Request Example: `{"name": "popsicle", "price": 1.45}`
* Response Example: `{"added": {"name": "popsicle", "price": 1.45}}`

### 3. **GET /items/:name**

* Displays details of a single item by name.
* Response Example: `{"name": "popsicle", "price": 1.45}`

### 4. **PATCH /items/:name**

* Modifies a single item's name and/or price.
* Request Example: `{"name": "new popsicle", "price": 2.45}`
* Response Example: `{"updated": {"name": "new popsicle", "price": 2.45}}`

### 5. **DELETE /items/:name**

* Deletes a specific item from the array.
* Response Example: `{"message": "Deleted"}`

## Usage

1. Install dependencies: `npm install`
2. Run the application: `npm start`

Please make use of [Express Router](https://expressjs.com/en/guide/routing.html#express.Router) for defining routes.
