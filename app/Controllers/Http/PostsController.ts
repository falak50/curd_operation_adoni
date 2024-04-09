
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Post from 'App/Models/Post';

export default class PostsController {
  public async index() {
    return await Post.all()
  }

  public async show({ params }: HttpContextContract) {
    return await Post.findOrFail(params.id)
  }

  public async store({ request }: HttpContextContract) {
    const postData = request.only(['caption', 'user_id'])
    return await Post.create(postData)
  }

  public async update({ params, request }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const postData = request.only(['caption', 'user_id'])
    post.merge(postData)
    await post.save()
    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.delete()
    return { message: 'Post deleted successfully' }
  }
}