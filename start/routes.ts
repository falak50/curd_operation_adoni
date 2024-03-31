

import Route from '@ioc:Adonis/Core/Route'
import ItemsController from 'App/Controllers/Http/ItemsController';

Route.get('/', async ({view})=>{
  let user = {
     name:'falak',
     skills:['css','html','javascript'],
     age:'25'
  }
    return view.render('home',{
      obj:user
    });
})
Route.get('/about', async ({view})=>{
    return view.render('about');
})
Route.get('/create', async ({view})=>{
    return view.render('create');
})
Route.post('/items','ItemsController.store')
// Route.get('/items','ItemsController.store')



