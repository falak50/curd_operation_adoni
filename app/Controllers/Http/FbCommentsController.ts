// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FbComment from "App/Models/FbComment"

export default class FbCommentsController {
    async index ({ response }) {
        const users = await FbComment.all()
        return response.json(users)
      }
    
      async store ({ request, response }) {

        const commentData = request.only(['userId','postId' ,'content'])
        // return commentData;
        const comment = await FbComment.create(commentData) 
        return response.status(201).json(comment)
      }
    
      async show ({ params, response }) {
        return 'hit show'
        const user = await FbComment.find(params.id)
        if (!user) {
          return response.status(404).json({ message: 'User not found' })
        }
        return response.json(user)
      }
    
      async update ({ params, request, response }) {
        return 'hit update '
        const userData = request.only(['name', 'email'])
        const user = await FbComment.find(params.id)
        if (!user) {
          return response.status(404).json({ message: 'User not found' })
        }
        // user.merge(userData)
        // await user.save()
        return response.json(user)
      }
    
      async destroy ({ params, response }) {
        return 'hit destroy'
        const user = await FbComment.find(params.id)
        if (!user) {
          return response.status(404).json({ message: 'User not found' })
        }
        // await user.delete()
        return response.status(204).json(null)
      }
}
