import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';
import Item from 'App/Models/Item';

export default class ItemsController {
    public async create({ view }: HttpContextContract) {
        console.log('create');
        return view.render('create');
    }

    public async store({ request, response }: HttpContextContract) {
        console.log('in the store');
        const data = request.all();
        console.log(data);

        const newPostSchema = schema.create({
            name: schema.string(),
            quantity: schema.number(),
            price: schema.number()
        });

        try {
            const payload = await request.validate({ schema: newPostSchema });
            console.log('payload --- > ', payload);

            const item = new Item();
            item.name = payload.name;
            item.quantity = payload.quantity;
            item.price = payload.price;

            await item.save();

            return response.send('Item created successfully');
        } catch (error) {
            // Handle validation errors
            console.error(error.messages);
            return response.badRequest(error.messages);
        }
    }
}
