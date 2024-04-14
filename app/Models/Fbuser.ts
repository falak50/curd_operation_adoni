
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Fbpost from './Fbpost';
import FbComment from './FbComment';

export default class Fbuser extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public username: string;
  @column()
  public email: string;
  
  @hasMany(() => Fbpost, {
    foreignKey: "userId",
  })
  public userPost: HasMany<typeof Fbpost>;

  @hasMany(() => FbComment, {
    foreignKey: "userId",
  })
  public userComment: HasMany<typeof FbComment>;

}

