import { Table, MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"
import { primaryIdColumn, createdAtColumn, partnerIdColumn, partnerIdForeignKeyOptions } from '../utils'

export class CreatePartnerCredentialsTable1650817540261 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'partner_credentials',
                columns: [
                    primaryIdColumn(),
                    partnerIdColumn(),
                    {
                        name: 'key',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'secret',
                        type: 'varchar',
                    },
                    createdAtColumn(),
                ]
            })
        );

        await queryRunner.createForeignKey(
            'partner_credentials',
            new TableForeignKey(partnerIdForeignKeyOptions())
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('partner_credentials', true)
    }

}
