import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRoles } from "./user.roles.model";
import { User } from "../../users/entity/users.model";


interface  RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  description: string;

  @BelongsToMany( () => User,  () => UserRoles)
  user: User[]
}