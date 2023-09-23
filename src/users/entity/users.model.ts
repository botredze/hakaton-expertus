import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table
} from "sequelize-typescript";
import { UserDetail } from "../../user-details/entity/user.detail.model";
import { UserRoles } from "../../role/entity/user.roles.model";
import { Role } from "../../role/entity/role.model";
import { Descussions } from "../../discussions/entity/descussions.model";
import { Sulution } from "../../sulution/entity/sulution.model";
import { PetitionModel } from "../../petitions/entity/petition.model";
import { Articles } from "../../articles/entity/articles.model";

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

  // @Column({type: DataType.STRING, allowNull: false})
  // role: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @HasMany(() => Descussions)
  descussion: Descussions[]

  @HasMany(() => Sulution)
  sulutuin: Sulution[]

  @HasMany(() => PetitionModel)
  petition: PetitionModel[]

  @HasMany(() => Articles)
  article: Articles[]
}