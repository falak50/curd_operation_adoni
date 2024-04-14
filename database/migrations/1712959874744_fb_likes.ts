import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fb_likes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("user_id").unsigned().references("id").inTable("fbusers");
      table.integer("post_id").unsigned().references("id").inTable("fbposts");
      table.timestamps(true, true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
