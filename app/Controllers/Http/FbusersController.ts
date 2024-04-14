// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fbuser from "App/Models/Fbuser"



export default class FbusersController {
    async index ({ response }) {
        const users = await Fbuser.all()
        return response.json(users)
      }
    
      async store ({ request, response }) {
        const userData = request.only(['name', 'email'])
        const user = await Fbuser.create(userData) 
        return response.status(201).json(user)
      }
    
      async show ({ params, response }) {
        const user = await Fbuser.find(params.id)
        if (!user) {
          return response.status(404).json({ message: 'User not found' })
        }
        return response.json(user)
      }
    
      async update ({ params, request, response }) {
        const userData = request.only(['name', 'email'])
        const user = await Fbuser.find(params.id)
        if (!user) {
          return response.status(404).json({ message: 'User not found' })
        }
        user.merge(userData)
        await user.save()
        return response.json(user)
      }
    
      async destroy ({ params, response }) {
        const user = await Fbuser.find(params.id)
        if (!user) {
          return response.status(404).json({ message: 'User not found' })
        }
        await user.delete()
        return response.status(204).json(null)
      }

}
