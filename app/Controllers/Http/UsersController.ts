import User from "App/Models/User"
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';



export default class UsersController {
  public async index() {
    return await User.all()
  }

  public async show({ params }: HttpContextContract) {
    return await User.findOrFail(params.id)
  }

  public async store({ request }: HttpContextContract) {
    const userData = request.only(['username', 'email', 'password'])
    return await User.create(userData)
  }

  public async update({ params, request }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const userData = request.only(['username', 'email', 'password'])
    user.merge(userData)
    await user.save()
    return user
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return { message: 'User deleted successfully' }
  }
}