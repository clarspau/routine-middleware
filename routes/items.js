const Item = require('../item');
const express = require('express');

const router = express.Router();

/** 
 * GET /items 
 * Returns an array of items.
 */
router.get('', (req, res, next) => {
     try {
          const items = Item.findAll();
          return res.json({ items });
     } catch (err) {
          return next(err);
     }
});

/** 
 * POST /items 
 * Creates a new item with the provided name and price.
 * Returns the newly created item.
 */
router.post('', (req, res, next) => {
     try {
          const { name, price } = req.body;
          const newItem = new Item(name, price);
          return res.json({ item: newItem });
     } catch (err) {
          return next(err);
     }
});

/** 
 * GET /items/:name 
 * Returns details of a specific item by name.
 */
router.get('/:name', (req, res, next) => {
     try {
          const foundItem = Item.find(req.params.name);
          return res.json({ item: foundItem });
     } catch (err) {
          return next(err);
     }
});

/** 
 * PATCH /items/:name 
 * Updates details of a specific item by name.
 * Returns the updated item.
 */
router.patch('/:name', (req, res, next) => {
     try {
          const foundItem = Item.update(req.params.name, req.body);
          return res.json({ item: foundItem });
     } catch (err) {
          return next(err);
     }
});

/** 
 * DELETE /items/:name 
 * Deletes a specific item by name.
 * Returns a message indicating deletion.
 */
router.delete('/:name', (req, res, next) => {
     try {
          Item.remove(req.params.name);
          return res.json({ message: 'Deleted' });
     } catch (err) {
          return next(err);
     }
});

module.exports = router;
