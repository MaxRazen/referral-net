import {Table, MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm'
import {createdAtColumn, primaryIdColumn, uidColumn, updatedAtColumn} from '../utils'

export class CreateConversionsTable1650720899354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'conversions',
                columns: [
                    primaryIdColumn(),
                    uidColumn(),
                    {
                        name: 'partner_id',
                        type: 'int',
                        unsigned: true,
                    },
                    {
                        name: 'amount',
                        type: 'int',
                        default: 0,
                    },
                    createdAtColumn(),
                    updatedAtColumn(),
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('conversions');
    }

}
