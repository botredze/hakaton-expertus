import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "./role.model";
import { User } from "../../users/entity/users.model";


@Table({tableName: 'user-roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Role)
  @Column({type: DataType.INTEGER})
  roleId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: string;
}