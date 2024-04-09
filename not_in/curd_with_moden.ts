import Route from '@ioc:Adonis/Core/Route';
import Database from '@ioc:Adonis/Lucid/Database';
import Item from 'App/Models/Item';

// Get all items
Route.get('/items', async () => {
  return Item.all();
});

// Get one item by ID
Route.get('/items/:id', async ({ params }) => {
  const itemId = params.id;
  return Item.findOrFail(itemId);
});

// Delete an item by ID
Route.delete('/items/:id', async ({ params }) => {
  const itemId = params.id;
  const item = await Item.findOrFail(itemId);
  await item.delete();
  return { message: 'Item deleted successfully' };
});

Route.put('/items/:id', async ({ params, request }) => {
  const itemId = params.id;
  const item = await Item.findOrFail(itemId);

  // Extracting the fields to update from the request body
  const { name, quantity, price } = request.only(['name', 'quantity', 'price']);

  // Updating the item with the provided fields
  if (name !== undefined) {
    item.name = name;
  }
  if (quantity !== undefined) {
    item.quantity = quantity;
  }
  if (price !== undefined) {
    item.price = price;
  }

  await item.save();

  return { message: 'Item updated successfully', item };
});

// Create a new item
Route.post('/items', async ({ request }) => {
  // Extracting the fields from the request body
  const { name, quantity, price } = request.only(['name', 'quantity', 'price']);

  // Creating a new item instance
  const newItem = new Item();
  newItem.name = name;
  newItem.quantity = quantity;
  newItem.price = price;

  // Saving the new item to the database
  await newItem.save();

  return { message: 'Item created successfully', item: newItem };
});