

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database';
import ItemsController from 'App/Controllers/Http/ItemsController';
import Item from 'App/Models/Item';

// Route.get('/', async ({view})=>{
//   let user = {
//      name:'falak',
//      skills:['css','html','javascript'],
//      age:'25'
//   }
//     return view.render('home',{
//       obj:user
//     });
// })
Route.get('/', async ({view})=>{
  let items= await Item.all();
  console.log('data -->',items);
    return view.render('home',{
      items:items
    });
})
Route.get('/about', async ({view})=>{
    return view.render('about');
})
Route.get('/create', async ({view})=>{
    return view.render('create');
})
Route.post('/items','ItemsController.store')
// Route.post('/items','ItemsController.index')
// Route.get('/items','ItemsController.store')

Route.get('/all', async () => {
  // return 'hello';
  return Database.from('items').select('*')
})
Route.get('/edit', async ({ params }) => {
  const itemId = params.id;
  return itemId; // Just to verify that the ID is received correctly
});

