import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "../../users/entity/users.model";

@Table({tableName: 'user-details'})
export class UserDetail extends Model<UserDetail> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({type: DataType.STRING,  allowNull: true})
  firstName: string;
  @Column({type: DataType.STRING,  allowNull: true})
  lastName: string;
  @Column({type: DataType.INTEGER,  allowNull: true})
  age: number;
  @Column({type: DataType.STRING,  allowNull: true})
  avatar: string;
  @Column({type: DataType.STRING,  allowNull: true})
  language: string;
  @Column({type: DataType.STRING,  allowNull: true})
  createdAt: string;


  @Column({type: DataType.INTEGER})
  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(()=> User)
  user: User
}