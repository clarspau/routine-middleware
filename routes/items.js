/**
 * Routes for CRUD operations on items using Express.
 * GET, POST, PATCH, DELETE routes delegate logic to the Item module.
 */


const Item = require('.../item');
const express = require('express');

const router = new express.Router();


/** GET /items: get list of items */

router.get('', (req, res, next) => {
     try {
          return res.json({ items: Item.findAll() });
     } catch (err) {
          return next(err);
     }
});


/** POST /items: create new item from data; return `{added: item}` */

router.post('', (req, res, next) => {
     try {
          let newItem = new Item(req.body.name, req.body.price);
          return res.json({ added: newItem });
     } catch (err) {
          return next(err);
     }
});


/** GET /items/[name]: get single item by name */

router.get('/:name', (req, res, next) => {
     try {
          let foundItem = Item.find(req.params.name);
          return res.json({ item: foundItem });
     } catch (err) {
          return next(err);
     }
});


/** PATCH /items/[name]: update item; return `{updated: item}` */

router.patch('/:name', (req, res, next) => {
     try {
          let foundItem = Item.update(req.params.name, req.body);
          return res.json({ updated: foundItem });
     } catch (err) {
          return next(err);
     }
});


/** DELETE /items/[name]: delete item, return `{message: "Deleted"}` */

router.delete('/:name', (req, res, next) => {
     try {
          Item.remove(req.params.name);
          return res.json({ message: "Deleted" });
     } catch (err) {
          return next(err);
     }
});


module.exports = router;