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
  partnerIdColumn,
  partnerIdForeignKeyOptions,
} from "../utils";

export class CreateConversionsTable1650818678816 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "conversions",
        columns: [
          primaryIdColumn(),
          uidColumn(),
          partnerIdColumn(),
          {
            name: "asset_id",
            type: "int",
            unsigned: true,
          },
          {
            name: "external_id",
            type: "varchar",
          },
          {
            name: "customer_id",
            type: "int",
            unsigned: true,
          },
          {
            name: "meta_data",
            type: "json",
          },
          createdAtColumn(),
          updatedAtColumn(),
        ],
      })
    );

    await queryRunner.createForeignKey(
      "conversions",
      new TableForeignKey(partnerIdForeignKeyOptions())
    );

    await queryRunner.createForeignKey(
      "conversions",
      new TableForeignKey({
        columnNames: ["asset_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "partner_assets",
      })
    );

    await queryRunner.createForeignKey(
      "conversions",
      new TableForeignKey({
        columnNames: ["customer_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "customers",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("conversions");
  }
}
