import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Fbpost from './Fbpost';
import Fbuser from './Fbuser';

export default class FbComment extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public userId: number;
  @column()
  public postId: number;
  @column()
  public content: string;

  @belongsTo(() => Fbpost, {
    localKey: "postId",
  })
  public userPost: BelongsTo<typeof Fbpost>;

  @belongsTo(() => Fbuser, {
    foreignKey: 'userId'
  })
  public user: BelongsTo<typeof Fbuser>;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

 
}
