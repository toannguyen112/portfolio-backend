import { Table, Model, Column, PrimaryKey } from "sequelize-typescript";

@Table({
  tableName: "projects",
  timestamps: true,
})
export default class Project extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  /**
   * transform
   */
  public transform(item: any) {
    return {
      ...item
    }
  }

}
