// Fbpost.ts
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, column, belongsTo, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Fbuser from './Fbuser';
import FbComment from './FbComment';
import FbLike from './FbLike';

export default class Fbpost extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public userId: number;

  @column()
  public content: string;

  @belongsTo(() => Fbuser, {
    foreignKey: 'userId'
  })
  public user: BelongsTo<typeof Fbuser>;

  @hasMany(() => FbComment, {
    foreignKey: 'postId'
  })
  public comments: HasMany<typeof FbComment>;

  @hasMany(() => FbLike, {
    foreignKey: 'postId'
  })
  public likes: HasMany<typeof FbLike>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
