import {
  Table,
  TableForeignKey,
  MigrationInterface,
  QueryRunner,
} from "typeorm";
import {
  primaryIdColumn,
  uidColumn,
  createdAtColumn,
  updatedAtColumn,
} from "../utils";

export class CreateCommissionsTable1650822734233 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "commissions",
        columns: [
          primaryIdColumn(),
          uidColumn(),
          {
            name: "conversion_id",
            type: "int",
            unsigned: true,
          },
          {
            name: "status",
            type: "enum",
            enum: ["pending", "approved", "disapproved"],
          },
          {
            name: "currency",
            type: "char(3)",
          },
          {
            name: "amount",
            type: "int",
            unsigned: true,
          },
          createdAtColumn(),
          updatedAtColumn(),
        ],
      })
    );

    await queryRunner.createForeignKey(
      "commissions",
      new TableForeignKey({
        columnNames: ["conversion_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "conversions",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("commissions");
  }
}
