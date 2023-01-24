import { Table, Model, Column, PrimaryKey } from "sequelize-typescript";

@Table({
  tableName: "posts",
  timestamps: true,
})

export default class Post extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  status: string;
}
