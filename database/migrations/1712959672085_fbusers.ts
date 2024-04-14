import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fbusers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("userId");
      table.string("name").notNullable();
      table.string("email").unique().notNullable();

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
