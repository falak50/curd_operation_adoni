import Item from 'App/Models/Item';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class ItemsController {
    async index () {
        return Item.query().select('*')
    }
    
    async show ({ params }) {
        const itemId = params.id
        return Item.find(itemId)
    }
    
    async store ({ request, response }) {
        const validationSchema = schema.create({
            name: schema.string(),
            quantity: schema.number(),
            price: schema.number(),
        });
    
        try {
            const payload = await request.validate({ schema: validationSchema });
    
            await Item.create(payload);
    
            return response.status(201).send({ message: 'Item created successfully' });
        } catch (error) {
            return response.status(400).send({ error: error.messages });
        }
    }
    
    async destroy ({ params }) {
        const itemId = params.id
        await Item.query().where('id', itemId).delete()
        return { message: 'Item deleted successfully' }
    }
    
    async update ({ params, request, response }) {
        const validationSchema = schema.create({
            name: schema.string.optional(),
            quantity: schema.number.optional(),
            price: schema.number.optional(),
        });
    
        try {
            const payload = await request.validate({ schema: validationSchema });
    
            const itemId = params.id;
            const item = await Item.findOrFail(itemId);
    
            item.merge(payload);
            await item.save();
    
            return response.send({ message: 'Item updated successfully', item });
        } catch (error) {
            return response.status(400).send({ error: error.messages });
        }
    }
}
