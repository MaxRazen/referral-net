import { Table, MigrationInterface, QueryRunner } from "typeorm"
import { primaryIdColumn, uidColumn, createdAtColumn, updatedAtColumn } from '../utils'

export class CreateCustomersTable1650818530502 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'customers',
                columns: [
                    primaryIdColumn(),
                    uidColumn(),
                    {
                        name: 'external_id',
                        type: 'varchar',
                    },
                    createdAtColumn(),
                    updatedAtColumn(),
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customers');
    }

}
