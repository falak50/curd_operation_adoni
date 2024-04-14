import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fbposts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('postId')
      table.integer("userId").unsigned().references("postId").inTable("fbusers");
      table.string('content'); 
      table.timestamps(true, true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
