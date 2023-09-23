import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({tableName: 'photos'})
export  class PhotoModel extends Model<PhotoModel> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({type: DataType.STRING, allowNull: true})
  photoUrl: string;

}