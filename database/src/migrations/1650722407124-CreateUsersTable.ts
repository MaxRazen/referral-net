import { MigrationInterface, Table, QueryRunner } from "typeorm";
import { primaryIdColumn, createdAtColumn, updatedAtColumn } from "../utils";

export class CreateUsersTable1650722407124 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          primaryIdColumn(),
          {
            name: "full_name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          createdAtColumn(),
          updatedAtColumn(),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
