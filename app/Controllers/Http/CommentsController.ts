import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'

export default class CommentsController {
    public async index() {
        return await Comment.all()
      }
    
      public async show({ params }: HttpContextContract) {
        return await Comment.findOrFail(params.id)
      }
    
      public async store({ request }: HttpContextContract) {
        const commentData = request.only(['text', 'post_id'])
        return await Comment.create(commentData)
      }
    
      public async update({ params, request }: HttpContextContract) {
        const comment = await Comment.findOrFail(params.id)
        const commentData = request.only(['text', 'post_id'])
        comment.merge(commentData)
        await comment.save()
        return comment
      }
    
      public async destroy({ params }: HttpContextContract) {
        const comment = await Comment.findOrFail(params.id)
        await comment.delete()
        return { message: 'Comment deleted successfully' }
      }
}
