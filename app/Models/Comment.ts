import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'


import Post from 'App/Models/Post';

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public text: string

  @column()
  public post_id: number

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
