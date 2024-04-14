import Route from '@ioc:Adonis/Core/Route';
import User from 'App/Models/User';
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import Post from 'App/Models/Post';
import Comment from 'App/Models/Comment';
import Fbuser from 'App/Models/Fbuser';
import FbComment from 'App/Models/FbComment';
import Fbpost from 'App/Models/Fbpost';


Route.get('/', async () => {
  return 'servere is running on port 3333';
});

//items 
Route.get('/items', 'ItemsController.index')
Route.get('/items/:id', 'ItemsController.show')
Route.post('/items', 'ItemsController.store')
Route.put('/items/:id', 'ItemsController.update')
Route.delete('/items/:id', 'ItemsController.destroy')

 // Users 
 Route.get('/users', 'UsersController.index')
 Route.get('/users/:id', 'UsersController.show')
 Route.post('/users', 'UsersController.store')
 Route.put('/users/:id', 'UsersController.update')
 Route.delete('/users/:id', 'UsersController.destroy')

 // Posts
 Route.get('/posts', 'PostsController.index')
 Route.get('/posts/:id', 'PostsController.show')
 Route.post('/posts', 'PostsController.store')
 Route.put('/posts/:id', 'PostsController.update')
 Route.delete('/posts/:id', 'PostsController.destroy')

 // Comments
 Route.get('/comments', 'CommentsController.index')
 Route.get('/comments/:id', 'CommentsController.show')
 Route.post('/comments', 'CommentsController.store')
 Route.put('/comments/:id', 'CommentsController.update')
 Route.delete('/comments/:id', 'CommentsController.destroy')

// ---------------------------xx----------------------
// ---------------------------xx----------------------
// Fbusers
Route.get('/fbusers', 'FbusersController.index')
Route.post('/fbusers', 'FbusersController.store')

// Fbpost
Route.get('/fbposts', 'FbpostsController.index')
Route.post('/fbposts', 'FbpostsController.store')

//FbComment
Route.get('/fbcomments', 'FbCommentsController.index')
Route.post('/fbcomments', 'FbCommentsController.store')



 /// test 
