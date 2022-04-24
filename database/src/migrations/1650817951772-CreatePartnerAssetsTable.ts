import {
  Table,
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
} from "typeorm";
import {
  primaryIdColumn,
  createdAtColumn,
  partnerIdColumn,
  partnerIdForeignKeyOptions,
} from "../utils";

export class CreatePartnerAssetsTable1650817951772
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "partner_assets",
        columns: [
          primaryIdColumn(),
          partnerIdColumn(),
          {
            name: "code",
            type: "varchar",
            isUnique: true,
          },
          createdAtColumn(),
        ],
      })
    );

    await queryRunner.createForeignKey(
      "partner_assets",
      new TableForeignKey(partnerIdForeignKeyOptions())
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("partner_assets");
  }
}
