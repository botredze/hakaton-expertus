import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { UserDetail } from "../../user-details/entity/user.detail.model";

interface  UserCreateArt {
  email: string;
  password: string;
}
@Table({tableName: 'User'})
export class User extends Model<User, UserCreateArt> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;


  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;


  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  @HasOne(()=> UserDetail, 'userId')
  userDetail: UserDetail

  @Column({type: DataType.STRING, allowNull: false})
  role: string
}