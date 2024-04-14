// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fbpost from "App/Models/Fbpost"

export default class FbpostsController {

    async index ({ response }) {
        const users = await Fbpost.all()
        return response.json(users)
      }
    
      async store ({ request, response }) {
       
        const postData = request.only(['userId', 'content'])
        const post = await Fbpost.create(postData) 
        return response.status(201).json(post)
      }
    
      async show ({ params, response }) {
        return 'hit show'
        const user = await Fbpost.find(params.id)
        if (!user) {
          return response.status(404).json({ message: 'User not found' })
        }
        return response.json(user)
      }
    
      async update ({ params, request, response }) {
        return 'hit update '
        const userData = request.only(['name', 'email'])
        const user = await Fbpost.find(params.id)
        if (!user) {
          return response.status(404).json({ message: 'User not found' })
        }
        // user.merge(userData)
        // await user.save()
        return response.json(user)
      }
    
      async destroy ({ params, response }) {
        return 'hit destroy'
        const user = await Fbpost.find(params.id)
        if (!user) {
          return response.status(404).json({ message: 'User not found' })
        }
        // await user.delete()
        return response.status(204).json(null)
      }
}
