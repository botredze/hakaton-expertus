import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/entity/users.model";

@Table({tableName: 'petitions'})
export class PetitionModel extends Model<PetitionModel> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({type: DataType.STRING, allowNull: true})
  photo: string;

  @Column({type: DataType.STRING, allowNull: true})
  problems: string;

  @Column({type: DataType.STRING, allowNull: true})
  solution: string;

  @Column({type: DataType.STRING, allowNull: true})
  signatures: number;

  @Column({type: DataType.STRING, allowNull: true})
  publicDate: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}