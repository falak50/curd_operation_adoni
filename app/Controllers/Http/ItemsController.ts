import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
    public async create({view}:HttpContextContract){
        console.log('create')
        return view.render('create')
    }

    public async store ({ request, response }: HttpContextContract) {
        
            console.log('in the store');
            const data = request.all();
            console.log(data);
            const item = new Item();
    
            item.name = data.name;
            item.quantity = data.quantity;
            item.price = data.price;
    
            await item.save();
    
            return response.send('Item created successfully');
     
    }
}
