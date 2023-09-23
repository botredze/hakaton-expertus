import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/entity/users.model";
import { Descussions } from "../../discussions/entity/descussions.model";


@Table({tableName: "sulutions"})
export class Sulution extends Model<Sulution> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  sulutionText: string;

  @Column({type: DataType.STRING, allowNull: true})
  publicDate: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Descussions)
  @Column({type: DataType.INTEGER})
  descussionId: number;

  @BelongsTo(()=> Descussions)
  descussion: Descussions
}