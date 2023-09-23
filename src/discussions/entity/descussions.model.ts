import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "../../users/entity/users.model";
import { Sulution } from "../../sulution/entity/sulution.model";
import { Comments } from "../../comments/entity/comments.model";

@Table({tableName:'descussions',})
export class Descussions extends Model<Descussions> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({type: DataType.STRING, allowNull: true})
  theme: string;

  @Column({type: DataType.STRING, allowNull: true})
  description: string;

  @Column({type: DataType.INTEGER, allowNull: true})
  reactionLike: number;

  @Column({type: DataType.STRING, allowNull: true})
  publicDate: string;

  @Column({type: DataType.INTEGER, allowNull: true})
  views: number

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Comments)
  comments: Comments[]

  @HasMany(()=> Sulution)
  sulution: Sulution[]
}

