import { MigrationInterface, Table, QueryRunner } from 'typeorm'
import { primaryIdColumn, uidColumn, createdAtColumn, updatedAtColumn } from '../utils'

export class CreatePartnersTable1650722411927 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'partners',
                columns: [
                    primaryIdColumn(),
                    uidColumn(),
                    {
                        name: 'company',
                        type: 'varchar',
                    },
                    createdAtColumn(),
                    updatedAtColumn(),
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
