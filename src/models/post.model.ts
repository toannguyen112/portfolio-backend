import { Table, Model, Column, PrimaryKey, BelongsToMany } from "sequelize-typescript";
import File from "./file.model";
import PostFile from "./post_file.model";
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
  type: string;

  @Column
  description: string;

  @Column
  isFeatured: boolean;

  @Column
  content: string;

  @Column
  status: string;

  @BelongsToMany(() => File, () => PostFile)
  authors: File[];

  public transform(item: any) {
    return {
      ...item
    }
  }
}
