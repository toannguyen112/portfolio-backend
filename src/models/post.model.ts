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
  description: string;

  @Column
  isFeatured: boolean;

  @Column
  content: string;

  @Column
  status: string;

  public transform(item: any) {
    return {
      ...item
    }
  }
}
