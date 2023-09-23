import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/entity/users.model";


@Table({tableName: 'article'})
export class Articles extends Model<Articles> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: string

  @Column({type: DataType.STRING, allowNull: true})
  article: string;

  @Column({type: DataType.STRING, allowNull: true})
  photo: string;

  @Column({type: DataType.STRING, allowNull: true})
  publicDate: string;

  @Column({type: DataType.STRING, allowNull: true})
  theme: string;

  @Column({type: DataType.STRING, allowNull: true})
  shortDescription: string;

  @Column({type: DataType.INTEGER, allowNull: true})
  likeCount: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}