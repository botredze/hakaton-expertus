import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Descussions } from "../../discussions/entity/descussions.model";

@Table({tableName: 'comments'})
export class Comments extends Model<Comments> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({type: DataType.STRING, allowNull: true})
  text: string;
  @Column({type: DataType.STRING, allowNull: true})
  publicDate: string

  @ForeignKey(() => Descussions)
  @Column({type: DataType.INTEGER})
  descussionId: number;

  @BelongsTo(()=> Descussions)
  descussion: Descussions
}